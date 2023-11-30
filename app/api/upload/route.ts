import multer from 'multer';
import { NextResponse } from 'next/server';

const storage = multer.diskStorage({
  destination: './public/uploads/', // Set the destination folder
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original file name
  },
});

const upload = multer({ storage: storage });

export async function POST(req:Request) {
  if (req.method === 'POST') {
    try {
      //await upload.single('file')(req, res);
      console.log('uploading your file---just wait!')
      //const payload = await req.json()
      //const body = JSON.stringify(payload);
      console.log(req)

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