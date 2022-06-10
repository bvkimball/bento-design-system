import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationBook(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M20 66.25h43.75a2.5 2.5 0 0 0 2.5-2.5v-55a2.5 2.5 0 0 0-2.5-2.5H20a2.5 2.5 0 0 0-2.5 2.5v55a2.5 2.5 0 0 0 2.5 2.5Z"
          fill="#FAEFDE"
        />
        <path d="M23.75 66.25h-12.5V10A3.75 3.75 0 0 1 15 6.25h8.75v60Z" fill="#CDA1A7" />
        <path
          d="M61.25 73.75h-47.5a2.5 2.5 0 0 1-2.5-2.5v-2.5a2.5 2.5 0 0 1 2.5-2.5h47.5a2.5 2.5 0 0 1 2.5 2.5v2.5a2.5 2.5 0 0 1-2.5 2.5Z"
          fill="#EFD8BE"
        />
        <path
          d="M23.75 10c-.691 0-1.25.56-1.25 1.25v5a1.25 1.25 0 1 0 2.5 0v-5c0-.69-.559-1.25-1.25-1.25Z"
          fill="#8D6C9F"
        />
        <path
          d="M63.75 5H15c-2.758 0-5 2.242-5 5v60c0 2.757 2.242 5 5 5h46.25A3.755 3.755 0 0 0 65 71.25v-3.98c1.451-.517 2.5-1.892 2.5-3.52v-55A3.755 3.755 0 0 0 63.75 5Zm-2.5 67.5H15a2.502 2.502 0 0 1-2.5-2.5c0-1.556 1.736-2.5 2.5-2.5h47.5v3.75c0 .689-.56 1.25-1.25 1.25ZM65 63.75c0 .689-.56 1.25-1.25 1.25H25V21.25a1.25 1.25 0 1 0-2.5 0V65H15c-.771 0-1.675.279-2.5.791V10c0-1.379 1.121-2.5 2.5-2.5h48.75c.69 0 1.25.561 1.25 1.25v55Z"
          fill="#8D6C9F"
        />
        <path
          d="M18.75 10h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Zm0 6.25h-2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M16 5c-2.759 0-5 2.241-5 5v60c0 2.759 2.241 5 5 5h46.25A3.757 3.757 0 0 0 66 71.25v-3.98c1.45-.517 2.5-1.894 2.5-3.52v-55A3.757 3.757 0 0 0 64.75 5H16Zm0 2.5h48.75c.689 0 1.25.562 1.25 1.25v55c0 .689-.561 1.25-1.25 1.25H26V21.25a1.25 1.25 0 1 0-2.5 0V65H16c-.771 0-1.675.278-2.5.791V10c0-1.377 1.123-2.5 2.5-2.5Zm1.25 2.5a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm7.5 0a1.25 1.25 0 0 0-1.25 1.25v5a1.25 1.25 0 1 0 2.5 0v-5A1.25 1.25 0 0 0 24.75 10Zm-7.5 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5Zm0 6.25a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5h-2.5ZM16 67.5h47.5v3.75c0 .689-.562 1.25-1.25 1.25H16a2.505 2.505 0 0 1-2.5-2.5c0-1.558 1.738-2.5 2.5-2.5Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}