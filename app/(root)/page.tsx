import Image from "next/image";
import MainCard from "@/components/cards/MainCard";
import { ExamplesOfCustomBadges } from "@/constants/constants";
import FileUpload from "@/components/upload/FileUpload/FileUpload";
import Cropper from "@/components/cropper/Cropper";
import Editor from "@/components/editor/Editor";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto lg:w-[80%] my-20">
        <div className="">
          {/* <FileUpload/> */}
          {/*<div className="">
            <h2 className="text-center text-3xl font-bold pb-4">Crop your Image</h2>
            <div className="h-96 w-96 relative mx-auto">
              <Cropper />
            </div>
            </div>*/}
            <div className="">
              <Editor/>
            </div>
        </div>

        {/*TODO: When a user is logined - show there previous profile pics instead*/}
        <div className="py-20">
          <h2 className="text-center text-3xl font-bold">Some Examples</h2>
          <div className="mt-10 py-10 flex justify-center bg-gray-100">
            <div className=" grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              {ExamplesOfCustomBadges.map((item, idx) => (
                <MainCard
                  imageUrl={item.image}
                  badgeColor={item.badgeColor}
                  badgeLabel={item.badgeLabel}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
