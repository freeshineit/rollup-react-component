import IconWrapper from './IconWrapper';

/**
 * @description exit fullscreen icon
 * @returns
 */
const IconFullscreenExit1 = () => {
  const type = 'fullscreen-exit1';

  return (
    <IconWrapper type={type}>
      <svg
        focusable="false"
        data-icon={type}
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        viewBox="1 1 19 19"
      >
        <path
          d="M5.7,8.1H3.9c-0.3,0-0.6-0.2-0.6-0.6S3.6,7,3.9,7h1.9c0.7,0,1.3-0.6,1.3-1.3V3.8c0-0.3,0.2-0.6,0.6-0.6
          s0.6,0.2,0.6,0.6v1.9C8.2,7,7.1,8.1,5.7,8.1z"
        ></path>
        <path
          d="M7.6,17.7c-0.3,0-0.6-0.2-0.6-0.6v-1.9c0-0.7-0.6-1.3-1.3-1.3H3.9c-0.3,0-0.6-0.2-0.6-0.6s0.2-0.6,0.6-0.6h1.9
          c1.3,0,2.4,1.1,2.4,2.4v1.9C8.2,17.5,7.9,17.7,7.6,17.7z"
        ></path>
        <path
          d="M13.4,17.7c-0.3,0-0.6-0.2-0.6-0.6v-1.9c0-1.3,1.1-2.4,2.4-2.4h1.9c0.3,0,0.6,0.2,0.6,0.6S17.5,14,17.2,14
          h-1.9c-0.7,0-1.3,0.6-1.3,1.3v1.9C14,17.5,13.8,17.7,13.4,17.7z"
        ></path>
        <path
          d="M17.2,8.1h-1.9c-1.3,0-2.4-1.1-2.4-2.4V3.8c0-0.3,0.2-0.6,0.6-0.6S14,3.5,14,3.8v1.9C14,6.4,14.6,7,15.3,7h1.9
          c0.3,0,0.6,0.2,0.6,0.6S17.5,8.1,17.2,8.1z"
        ></path>
      </svg>
    </IconWrapper>
  );
};

export default IconFullscreenExit1;
