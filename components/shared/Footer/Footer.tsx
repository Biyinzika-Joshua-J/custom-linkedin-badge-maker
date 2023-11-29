import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterSocialLinks } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="py-6 border-t-2 border-gray-200">
      <div className="flex items-center justify-center flex-col">
        <div className="pb-4  text-center">
          <Link
            className="hover:font-bold cursor-pointer "
            href={"/about"}
          >
            About
          </Link>
        </div>
        <div className="">
            {
                FooterSocialLinks.map((item, idx) => (
                    <Link target="_blank" className="mx-4" href={item.url} key={idx}>
                        <FontAwesomeIcon icon={item.icon} className="text-2xl"/>
                    </Link>
                ))
            }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
