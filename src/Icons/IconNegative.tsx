import { IconProps } from "./IconProps";
import { svgIconProps } from "./svgIconProps";

export function IconNegative(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgIconProps(props)}>
      <path d="M15.8667 0H8.13333C7.42667 0 6.74667 0.28 6.24 0.786667L0.773333 6.25333C0.28 6.74667 0 7.42667 0 8.13333V15.8667C0 16.5733 0.28 17.2533 0.786667 17.7467L6.25333 23.2133C6.74667 23.72 7.42667 24 8.13333 24H15.8667C16.5733 24 17.2533 23.72 17.7467 23.2133L23.2133 17.7467C23.72 17.2533 24 16.5733 24 15.8667V8.13333C24 7.42667 23.72 6.74667 23.2133 6.25333L17.7467 0.786667C17.2533 0.28 16.5733 0 15.8667 0ZM16.72 16.72C16.5966 16.8436 16.4501 16.9417 16.2888 17.0086C16.1275 17.0755 15.9546 17.1099 15.78 17.1099C15.6054 17.1099 15.4325 17.0755 15.2712 17.0086C15.1099 16.9417 14.9634 16.8436 14.84 16.72L12 13.88L9.17333 16.7067C9.04989 16.8301 8.90334 16.928 8.74206 16.9948C8.58077 17.0616 8.40791 17.096 8.23333 17.096C8.05876 17.096 7.8859 17.0616 7.72461 16.9948C7.56332 16.928 7.41678 16.8301 7.29333 16.7067C7.16989 16.5832 7.07197 16.4367 7.00516 16.2754C6.93836 16.1141 6.90397 15.9412 6.90397 15.7667C6.90397 15.5921 6.93836 15.4192 7.00516 15.2579C7.07197 15.0967 7.16989 14.9501 7.29333 14.8267L10.12 12L7.28 9.17333C7.15656 9.04989 7.05864 8.90334 6.99183 8.74206C6.92502 8.58077 6.89064 8.40791 6.89064 8.23333C6.89064 8.05876 6.92502 7.8859 6.99183 7.72461C7.05864 7.56332 7.15656 7.41678 7.28 7.29333C7.40344 7.16989 7.54999 7.07197 7.71128 7.00516C7.87256 6.93836 8.04543 6.90397 8.22 6.90397C8.39457 6.90397 8.56744 6.93836 8.72872 7.00516C8.89001 7.07197 9.03656 7.16989 9.16 7.29333L12 10.12L14.8267 7.29333C14.9501 7.16989 15.0967 7.07197 15.2579 7.00516C15.4192 6.93836 15.5921 6.90397 15.7667 6.90397C15.9412 6.90397 16.1141 6.93836 16.2754 7.00516C16.4367 7.07197 16.5832 7.16989 16.7067 7.29333C16.8301 7.41678 16.928 7.56332 16.9948 7.72461C17.0616 7.8859 17.096 8.05876 17.096 8.23333C17.096 8.40791 17.0616 8.58077 16.9948 8.74206C16.928 8.90334 16.8301 9.04989 16.7067 9.17333L13.88 12L16.7067 14.8267C17.24 15.3467 17.24 16.2 16.72 16.72Z" />
    </svg>
  );
}
