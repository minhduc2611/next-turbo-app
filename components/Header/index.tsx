"use client";
import React from "react";
import Image from "next/image";
import Icon from "@/public/icon.png";
import { useRouter } from "next/navigation";
const styles = {
  headerContainer: "",
  headerContainerChild: "w-4/6",
};
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import ChervronDownSVG from "./svgs/ChervronDownSVG";
import MenuSVG from "./svgs/MenuSVG";

export default function Header() {
  const router = useRouter();
  return (
    <div id="header" className="flex py-7">
      <div className="flex w-3/6">
        <Image
          onClick={() => router.push("/")}
          src={Icon}
          alt="icon"
          className="cursor-pointer"
        />
      </div>
      <div className=" w-3/6 justify-evenly lg:flex hidden">
        <a className="text-light-black flex justify-center items-center align-middle font-medium leading-6 cursor-pointer">
          Blog
        </a>
        <a className="text-light-black flex justify-center items-center align-middle font-medium leading-6 cursor-pointer">
          Socials
        </a>
        <a className="text-light-black flex justify-center items-center align-middle font-medium leading-6 cursor-pointer">
          Past Socials
        </a>
        <Menu placement="bottom">
          <MenuHandler>
            <a className="text-light-black flex justify-center items-center align-middle font-medium leading-6 cursor-pointer">
              Clubs{" "}
              <span className="flex justify-center items-center align-middle ml-2">
                <ChervronDownSVG />
              </span>
            </a>
          </MenuHandler>
          <MenuList className="bg-gray-200">
            <MenuItem>Coding Clubs</MenuItem>
            <MenuItem>Algorithm Clubs</MenuItem>
            <MenuItem>Blockchain Clubs</MenuItem>
          </MenuList>
        </Menu>
        <a className="text-light-black flex justify-center items-center align-middle font-medium leading-6 cursor-pointer">
          Contact
        </a>
      </div>
      <div className=" w-3/6 justify-end align-middle items-center lg:hidden flex">
          <Menu placement="bottom">
            <MenuHandler>
              <a className="text-light-black flex justify-center items-center align-middle font-medium leading-6 cursor-pointer">
                <span className="flex justify-center items-center align-middle ml-2">
                  <MenuSVG />
                </span>
              </a>
            </MenuHandler>
            <MenuList className="bg-gray-200">
              <MenuItem>Blog</MenuItem>
              <MenuItem>Socials</MenuItem>
              <MenuItem>Past Socials</MenuItem>
              <MenuItem>Clubs</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
      </div>
    </div>
  );
}
