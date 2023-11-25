import IconWrapper from './IconWrapper';

/**
 * @description fullscreen icon
 * @returns
 */
const IconFullscreen1 = () => {
  const type = 'fullscreen1';

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
        <path d="M3.4,7.6c-0.3,0-0.5-0.2-0.5-0.5V5.3c0-1.2,1-2.3,2.2-2.3h1.8c0.3,0,0.5,0.2,0.5,0.5S7.2,4.1,6.9,4.1H5.2 c-0.7,0-1.2,0.6-1.2,1.3v1.8C3.9,7.4,3.7,7.6,3.4,7.6z"></path>
        <path d="M6.9,18.1H5.2c-1.2,0-2.2-1-2.2-2.2v-1.8c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1.8c0,0.7,0.6,1.2,1.2,1.2 h1.8c0.3,0,0.5,0.2,0.5,0.5S7.2,18.1,6.9,18.1z"></path>
        <path d="M15.7,18.1h-1.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.8c0.7,0,1.2-0.6,1.2-1.2v-1.8 c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1.8C17.9,17.1,16.9,18.1,15.7,18.1z"></path>
        <path d="M17.4,7.6c-0.3,0-0.5-0.2-0.5-0.5V5.3c0-0.7-0.6-1.3-1.2-1.3h-1.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.8 c1.2,0,2.2,1,2.2,2.3v1.8C17.9,7.4,17.7,7.6,17.4,7.6z"></path>
      </svg>
    </IconWrapper>
  );
};

export default IconFullscreen1;
