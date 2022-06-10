import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationDatabase(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M8.75 22.5v36.25c0 6.9 13.988 12.5 31.25 12.5 17.263 0 31.25-5.6 31.25-12.5V22.5H8.75Z"
          fill="#C2CDE7"
        />
        <path d="M17.5 22.5H8.75v36.25c0 3.362 3.338 6.425 8.75 8.675V22.5Z" fill="#CED8ED" />
        <path
          d="M52.5 22.5v47.713c11.038-1.938 18.75-6.338 18.75-11.463V22.5H52.5Z"
          fill="#B5C4E0"
        />
        <path
          d="M40 8.75c-8.288 0-16.237 1.317-22.097 3.661-5.86 2.344-9.153 5.524-9.153 8.839 0 3.315 3.292 6.495 9.153 8.839C23.763 32.433 31.712 33.75 40 33.75c8.288 0 16.237-1.317 22.097-3.661 5.86-2.344 9.153-5.524 9.153-8.839 0-3.315-3.292-6.495-9.153-8.839C56.237 10.067 48.288 8.75 40 8.75Z"
          fill="#CED8ED"
        />
        <path
          d="M40 7.5c-18.225 0-32.5 6.037-32.5 13.75v37.5C7.5 66.463 21.775 72.5 40 72.5s32.5-6.037 32.5-13.75v-37.5C72.5 13.537 58.225 7.5 40 7.5Zm30 26.25C70 39.188 57.95 45 40 45s-30-5.813-30-11.25v-7.113c4.863 5 16.313 8.363 30 8.363 13.688 0 25.138-3.4 30-8.363v7.113ZM40 10c17.95 0 30 5.813 30 11.25 0 5.438-12.05 11.25-30 11.25s-30-5.813-30-11.25C10 15.812 22.05 10 40 10Zm0 60c-17.95 0-30-5.813-30-11.25v-7.138c4.012 4.125 12.6 7.225 23.575 8.125h.1a1.25 1.25 0 1 0 .1-2.5C20.225 56.137 10 51.4 10 46.25v-7.112c4.863 5 16.313 8.362 30 8.362 13.688 0 25.138-3.4 30-8.362v7.112c0 2.163-1.912 4.4-5.4 6.25a1.265 1.265 0 0 0 1.25 2.2c1.524-.8 2.922-1.82 4.15-3.025v7.075C70 64.188 57.95 70 40 70Z"
          fill="#8D6C9F"
        />
        <path
          d="M25.225 16.625c.1.012.2.012.3 0A61.677 61.677 0 0 1 40 15c1.662 0 3.312 0 4.925.162a1.253 1.253 0 0 0 .162-2.5C43.425 12.5 41.712 12.5 40 12.5a63.275 63.275 0 0 0-15.075 1.662 1.26 1.26 0 1 0 .3 2.5v-.037Zm25.337-.825c1.375.225 2.688.488 3.9.787a1.25 1.25 0 1 0 .613-2.425c-1.25-.325-2.663-.6-4.113-.837a1.266 1.266 0 0 0-.4 2.5V15.8ZM40 55a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 40 55Zm6.25-.25A1.25 1.25 0 0 0 45 56v2.5a1.25 1.25 0 0 0 2.5 0V56a1.25 1.25 0 0 0-1.25-1.25Zm6.25-.875a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5a1.25 1.25 0 0 0-1.25-1.25Zm6.25-1.375a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5a1.25 1.25 0 0 0-1.25-1.25Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M40.5 8C22.277 8 8 14.04 8 21.75v37.5C8 66.96 22.277 73 40.5 73S73 66.96 73 59.25v-37.5C73 14.04 58.723 8 40.5 8Zm0 2.5c17.944 0 30 5.815 30 11.25S58.444 33 40.5 33c-17.944 0-30-5.815-30-11.25s12.056-11.25 30-11.25Zm0 2.5c-5.527 0-10.737.576-15.078 1.665a1.247 1.247 0 0 0-.903 1.519 1.245 1.245 0 0 0 1.513.903c4.082-1.02 9.219-1.587 14.468-1.587 1.66 0 3.315.054 4.922.161.684.069 1.284-.469 1.328-1.157a1.245 1.245 0 0 0-1.162-1.333A75.769 75.769 0 0 0 40.5 13Zm10.962.83a1.242 1.242 0 0 0-1.43 1.035 1.25 1.25 0 0 0 1.034 1.436c1.377.22 2.686.483 3.902.786a1.245 1.245 0 0 0 1.514-.903 1.247 1.247 0 0 0-.904-1.519 47.47 47.47 0 0 0-4.116-.835ZM10.5 27.136c4.858 4.96 16.318 8.364 30 8.364 13.682 0 25.142-3.403 30-8.364v7.114c0 5.435-12.056 11.25-30 11.25-17.944 0-30-5.815-30-11.25v-7.114Zm0 12.5C15.358 44.596 26.818 48 40.5 48c13.682 0 25.142-3.403 30-8.364v7.114c0 2.163-1.914 4.4-5.395 6.294a1.254 1.254 0 0 0-.503 1.694 1.251 1.251 0 0 0 1.699.503c1.733-.942 3.13-1.977 4.199-3.076v7.085c0 5.435-12.05 11.25-30 11.25-17.944 0-30-5.815-30-11.25v-7.144c4.019 4.131 12.598 7.232 23.57 8.135.033 0 .073.005.102.005.65 0 1.191-.498 1.25-1.152a1.258 1.258 0 0 0-1.148-1.348C20.72 56.633 10.5 51.906 10.5 46.75v-7.114ZM59.25 53A1.25 1.25 0 0 0 58 54.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 59.25 53ZM53 54.372a1.25 1.25 0 0 0-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5a1.25 1.25 0 0 0-1.25-1.25Zm-6.25.879a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5a1.25 1.25 0 0 0-1.25-1.25Zm-6.25.249a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5a1.25 1.25 0 0 0-1.25-1.25Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}