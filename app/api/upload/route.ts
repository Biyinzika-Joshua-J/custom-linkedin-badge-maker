import multer from 'multer';
import { NextResponse } from 'next/server';
import util from 'util';
import { writeFile } from 'fs/promises';
import path from 'path';

const storage = multer.diskStorage({
  destination: './public/uploads/', // Set the destination folder
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original file name
  },
});

const upload = multer({ storage: storage });


const uploadMiddleware = (req) => {
  console.log('running middle ware');
  const uploadAsync = util.promisify(upload.single('file'));

  return new Promise(async (resolve, reject) => {
    try {
      await uploadAsync(req, null);
      resolve(req.file);
    } catch (error) {
      reject(error);
    }
  });
};

  

export async function POST(req:Request) {
  if (req.method === 'POST') {
    try {
      const uploadRes = await uploadMiddleware(req);
      console.log('uploading your file---just wait!')
      //const payload = await req.json()
      //const body = JSON.stringify(payload);
      console.log(uploadRes)
      const formData = await req.formData();
      const file = formData.get("file");
      if (!file) {
        return NextResponse.json({ error: "No file image received." }, { status: 400 });
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + file.name.replaceAll(" ", "_");
      try {
        await writeFile(
          path.join(process.cwd(), "public/uploads/" + filename),
          buffer
        );
        return NextResponse.json({ Message: "Success", status: 201 });
      } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
      }

      //return NextResponse.json({ message: 'File uploaded successfully' })
      //return new Response('File uploaded successfully', {status: 200})
    } catch (error) {
      return new Response('Error uploading file', {
        status: 500
      })
    }
  } else {
    return new Response('Method not allowed', {
        status: 450
      })
  }
}