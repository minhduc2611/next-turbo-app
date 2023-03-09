"use server";
import React from "react";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";

interface Props {
  value?: string;
}

const TextAreaPreview: React.FC<Props> = ({ value = "" }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (
        domNode instanceof Element &&
        domNode?.attribs &&
        domNode?.attribs.class === "remove"
      ) {
        return <></>;
      }
    },
  };
  const final = value.replaceAll('\n', '<br />')
  const result = parse(final, options)
  
  return (
    <div className="font-normal text-lg leading-7 mt-1 w-full focus-visible:outline-none resize-none rounded-[8px] py-3 focus-visible:shadow-none text-light-black">
      <span style={{ whiteSpace: "pre-line" }}>{result}</span>
    </div>
  );
};
export default TextAreaPreview;
