"use client";
import React, { useEffect } from "react";
import ColorPicker from "../colorPicker/ColorPicker";

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

        // Simulate curved text
      const text = "#opentowork";
      const centerX = canvas.width / 2;
      const centerY = canvas.height - 20;
      const radius = 150;
      const angleBetweenCharacters = Math.PI / 10; // Adjust as needed

      ctx.font = "bold 16px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charAngle = -text.length / 2 * angleBetweenCharacters + i * angleBetweenCharacters;

        const textWidth = ctx.measureText(char).width;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(charAngle);
        ctx.fillStyle = "red"; // Set background color
        ctx.fillRect(-textWidth / 2, -radius, textWidth, 20); // Adjust height as needed
        ctx.fillStyle = "white"; // Set text color
        ctx.fillText(char, 0, -radius + 16); // Adjust vertical position as needed
        ctx.restore();
      }
    };
  }, []);
  return (
    <div className="mx-auto w-[70%]  h-96">
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
          <div className="ml-10 mt-6">
            <div className="">
              <label htmlFor="badge">Pick Badge Color:</label>
            </div>
            <div className="w-full">
            <ColorPicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
