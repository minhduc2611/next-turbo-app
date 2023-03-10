import { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  divRef: HTMLDivElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef && divRef) {
      const scrollHeight = textAreaRef.scrollHeight;
      if (scrollHeight < 250) {
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaRef.style.height = "0px";
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
        textAreaRef.style.height = scrollHeight + "px";
      } else if (scrollHeight >= 250) {
        textAreaRef.style.height = "250px";
      }

      if (value && value.length > 13) {
        textAreaRef.classList.add("w-full");
        divRef.classList.add("w-full");
      } else {
        divRef.classList.remove("w-full");
        textAreaRef.style.height = "50px";
      }
    }
  }, [textAreaRef, divRef, value]);
};

export default useAutosizeTextArea;
