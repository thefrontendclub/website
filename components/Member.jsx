import Image from "next/image";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Member = ({ imgLink, name, role, socials }) => {
  const { discord, linkedin, twitter } = socials;
  return (
    <div className="flex flex-col gap-4 p-6 items-center">
      <Image className="profile-image rounded-full max-h-[100px] max-w-[100px] md:max-h-[200px] md:max-w-[200px]" alt={`${name} image`} src={imgLink} width={200} height={200} />
      <div className="name text-3xl font-bold">{name}</div>
      <div className="role text-lg">{role}</div>
      <div className="flex justify-center items-center gap-4">
        {discord && (
          <a className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark" href={discord} title="Join Our Discord !" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-8 h-8" />
          </a>
        )}
        {linkedin && (
          <a className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark" href={linkedin} title="Follow us on Linkedin" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="w-8 h-8" />
          </a>
        )}
        {twitter && (
          <a className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark" href={twitter} title="Follow us on Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-8 h-8" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Member;
