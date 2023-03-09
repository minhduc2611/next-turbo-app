"use client";
import React from "react";
import Image from 'next/image';
import Icon from '@/public/icon.png';
import { useRouter } from "next/navigation";
const styles = {
  headerContainer: "",
  headerContainerChild: "w-4/6",
};

export default function Header() {
  const router = useRouter()
  return (
    <div id="header" className="flex py-7">
      <div className="flex w-3/6">
        <Image onClick={() => router.push("/")} src={Icon} alt="icon" className="cursor-pointer" />
      </div>
      <div className="flex w-3/6 justify-evenly">
        <a className="text-light-black">Blog</a>
        <a className="text-light-black">Socials</a>
        <a className="text-light-black">Past Socials</a>
        <a className="text-light-black">Clubs</a>
        <a className="text-light-black">Contact</a>
      </div>
    </div>
  );
}
