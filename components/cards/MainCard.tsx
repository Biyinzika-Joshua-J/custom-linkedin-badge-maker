import React from "react";
import Image from "next/image";

interface Props {
    imageUrl : string;
    badgeLabel : string;
    badgeColor : string;
}

const MainCard = ({imageUrl, badgeLabel, badgeColor}:Props) => {
  return (
    <div className="w-56">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <Image
            className="p-8 rounded-full"
            src={imageUrl}
            alt="custom badge photos example"
            width={200}
            height={200}
          />
        </div>
       <div className="flex items-center justify-center pb-4">
            <span style={{backgroundColor:badgeColor}} className={` text-white px-4 rounded-xl`}>
                #{badgeLabel}
            </span>
       </div>
      </div>

    </div>
  );
};

export default MainCard;
