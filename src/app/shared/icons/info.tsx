type IconProps = {
  className?: string;
};

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 512 512" className={className}>
    <path d="M239.911 132.588c0-13.807 11.193-25 25-25s25 11.193 25 25-11.193 25-25 25-25-11.192-25-25zm38.618 183.995c-4.023 1.963-7.224.347-8.772-.793-1.464-1.077-3.776-3.434-3.448-7.43l15.876-63.147c.154-.614.279-1.235.375-1.861 2.728-17.888-4.634-35.66-19.212-46.381-14.582-10.724-33.746-12.454-50.01-4.517-13.556 6.614-16.368 7.984-16.378 7.989l17.517 35.961s2.803-1.365 16.402-8.001c4.024-1.962 7.223-.345 8.771.793 1.464 1.077 3.776 3.435 3.449 7.431l-15.876 63.147a20.341 20.341 0 0 0-.375 1.86c-2.729 17.887 4.633 35.659 19.21 46.38 8.508 6.257 18.575 9.453 28.718 9.453 7.24 0 14.519-1.628 21.294-4.934l13.588-6.631-17.541-35.949-13.588 6.63zM512 235.5c0 36.195-6.923 68.709-20.578 96.641-13.008 26.609-32.129 49.15-56.832 66.999C390.803 430.777 329.047 447.5 256 447.5c-20.442 0-40.185-1.313-58.845-3.909-42.33 42.462-94.389 44.91-105.736 44.91h-.423l-35.955-.053 18.983-30.52c.099-.162 11.108-18.301 19.591-48.232C32.285 373.671 0 313.784 0 235.5c0-36.195 6.923-68.709 20.578-96.641C33.586 112.25 52.708 89.708 77.41 71.86 121.197 40.222 182.953 23.5 256 23.5s134.803 16.723 178.59 48.36c24.702 17.848 43.823 40.39 56.832 66.999C505.077 166.79 512 199.305 512 235.5zm-40 0c0-57.903-20.468-102.051-60.836-131.217C374.238 77.602 320.583 63.5 256 63.5s-118.238 14.103-155.164 40.783C60.468 133.449 40 177.597 40 235.5c0 68.877 28.818 118.016 85.654 146.051l14.073 6.941-3.394 15.32a296.17 296.17 0 0 1-11.404 38.786c15.517-5.229 33.798-15.049 49.632-33.439l7.369-8.56 11.136 1.891c19.571 3.324 40.745 5.009 62.935 5.009 64.583 0 118.238-14.103 155.164-40.783C451.532 337.55 472 293.402 472 235.5z" />
  </svg>
);

export default InfoIcon;