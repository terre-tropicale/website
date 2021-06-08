type IconProps = {
  className?: string;
};

const ContactIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 512 512" className={className}>
    <path d="M456.975 379.13c-39.637-35.372-89.157-48-141.146-48l-.03-35.96c19.858-13.152 31.86-35.2 31.86-59.53v-4.93h33.961v16.925c0 28.215-6.718 28.215-13.215 28.215h-.304v30h.304c21.136 0 31.44-11.274 36.363-20.732 4.738-9.104 6.852-20.665 6.852-37.483l.009-91.975c0-12.631-1.011-26.264-4.9-38.512C389.181 48.152 327.236.021 255.892 0c-71.336.021-133.281 48.152-150.83 117.148-1.098 3.458-4.812 16.77-4.812 38.511v49.79c0 13.796 11.229 25.02 25.03 25.02h39.18v5.17c0 24.288 11.954 46.291 31.74 59.447v36.043c-50.165 0-98.148 12.63-137.32 45.351C21.227 407.933 0 450.741 0 497.02V512h512v-14.98c0-44.639-19.857-86.506-55.025-117.89zM347.66 200.71v-66h32.32c.804 4.971 1.563 12.017 1.563 20.95l.077 45.05zM255.892 29.98c50.473.015 95.12 29.868 114.921 74.729H342.61c-.136 0-.271.008-.406.01-10.983-26.62-36.734-44.079-66.054-44.079h-40.18c-29.237 0-54.924 17.361-65.956 43.849-.251-.007-.501-.019-.754-.019h-28.171c19.854-44.728 64.428-74.475 114.803-74.49zm52.065 75.412c-30.693 18.784-73.177 18.827-103.925.16 7.693-9.275 19.238-14.913 31.937-14.913h40.18c12.627.001 24.115 5.571 31.808 14.753zM130.25 155.66c0-9.071.782-16.208 1.6-21.19h32.61v66h-34.21zm64.21-21.029c37.434 19.89 85.84 19.817 123.2-.217V235.64c0 22.843-18.972 41.481-41.723 41.529h-40.145c-22.441-.069-41.332-19.011-41.332-41.529zm31.74 171.865c3.17.439 6.389.674 9.59.674h40.213a74.648 74.648 0 0 0 9.797-.666v42.184c-.619 15.567-13.47 28.041-29.185 28.041h-1.2c-16.109 0-29.215-13.105-29.215-29.215zM31.412 482.02c5.028-40.412 31.151-74.438 65.202-95.498 31.186-19.288 65.086-25.391 101.183-25.391 6.37 26.959 31.266 45.919 58.817 45.6 27.965 0 51.448-19.492 57.617-45.6 37.646 0 73.392 5.923 105.408 27.083 32.199 21.28 56.093 55.061 60.937 93.807H31.412zM119.558 409.105h55.66v30h-55.66z" />
  </svg>
);

export default ContactIcon;