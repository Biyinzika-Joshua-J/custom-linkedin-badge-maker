import multer from 'multer';
import { NextResponse } from 'next/server';
import util from 'util';

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
      console.log(file)

      //return NextResponse.json({ message: 'File uploaded successfully' })
      return new Response('File uploaded successfully', {
        status: 200
      })
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