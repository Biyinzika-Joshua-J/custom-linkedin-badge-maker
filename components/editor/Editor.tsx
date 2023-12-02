"use client";
import React, { useEffect } from "react";

const Editor = () => {
  useEffect(() => {
    const canvas: any = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");

    // Replace the URL with the path to your image
    const imageURL = "/assets/images/example-2.jpg";

    const image = new Image();
    image.src = imageURL;

    image.onload = () => {
      // Set canvas dimensions to match the aspect ratio of the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Draw a green box with white text at the bottom left
      const boxWidth = 200;
      const boxHeight = 50;
      const text = "#opentowork";

      ctx.fillStyle = "green";
      ctx.fillRect(0, canvas.height - boxHeight, boxWidth, boxHeight);

      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText(text, 10, canvas.height - boxHeight + 30);
    };
  }, []);
  return (
    <div className="mx-auto w-[70%] bg-red-400 h-96">
      <div className="grid grid-cols-2">
        <div className="">
          <canvas
            id="myCanvas"
            style={{
              width: "100%",
              border: "1px solid black",
            }}
          >
            <img src="/assets/images/example-2.jpg" />
          </canvas>
        </div>
        <div className="flex flex-col">
          <div className="ml-10">
            <div className="">
              <label htmlFor="badge">Badge Text:</label>
            </div>
            <div className="">
            <input
              id="badge"
              className=" outline-none py-2 px-2 w-[90%]  border-[1px] border-black"
              type="text"
              placeholder="Enter badge text here..."
              onChange={() => {}}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
