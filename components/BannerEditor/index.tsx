import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import InputPresent from "../InputPresentation";

import { IMAGES } from "@/common/constants";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
interface Props {
  defaultChecked?: boolean;
  handleChange: (check: string) => void;
}
const BannerEditor: React.FC<Props> = ({
  defaultChecked = false,
  handleChange = (check: string) => {},
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <div className="w-full flex flex-row-reverse">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className={`
          relative w-full h-[300px]   
          lg:absolute lg:w-[50vw] lg:h-[460px] lg:rounded-tr-[64px] lg:rounded-bl-[64px] lg:overflow-visible 
          bg-[#F2F2F2] flex cursor-pointer border-dashed border-[1px] border-gray-[6] bg-opacity-10
        `}
        >
          {selected ? (
            <Image
              src={selected}
              className={`h-full w-full rounded-tr-[64px] rounded-bl-[64px]`}
              alt="Default Image"
              objectFit="cover"
            />
          ) : (
            <div className="align-middle self-center justify-center w-full">
              <InputPresent
                className="self-center justify-center"
                classNameDiv="bg-transparent ml-2"
                classNameText="text-dark-blue font-semibold text-xl leading-5"
                value="Add a banner"
                iconName="image"
                iconWidth={18}
              />
            </div>
          )}
        </div>
      </div>
      <Dialog
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        open={open}
        size={"lg"}
        handler={(v) => {
          setOpen(v);
          handleChange(selected);
        }}
      >
        <div className="p-4 font-bold leading-5 text-xl">Choose a banner</div>
        <DialogBody divider>
          <div className="grid lg:grid-cols-6 lg:gap-4 sm:grid-cols-2 sm:gap-3">
            {IMAGES.map((link, indx) => {
              const isSelected = link === selected;
              return (
                <div key={indx} className="bg-red-200 h-28">
                  <Image
                    src={link}
                    className={`h-full w-full hover:scale-110 cursor-pointer ${
                      isSelected
                        ? "scale-110 border-primary-purple border-solid border-[2px]"
                        : ""
                    }`}
                    alt="Default Image"
                    objectFit="cover"
                    onClick={() => {
                      if (isSelected) {
                        setSelected("");
                      } else {
                        setSelected(link);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={() => {
              setOpen(false);
              handleChange(selected);
            }}
            className="mr-1 text-light-black"
          >
            <span>Close</span>
          </Button>
          <Button
            disabled={!selected}
            variant="gradient"
            className=" bg-secondary-yellow bg-none text-primary-purple"
            onClick={() => {
              setOpen(false);
              handleChange(selected);
            }}
          >
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default BannerEditor;
