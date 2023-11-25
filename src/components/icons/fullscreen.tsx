import IconWrapper from './IconWrapper';

/**
 * @description fullscreen icon
 * @returns
 */
const IconFullscreen = () => {
  const type = 'fullscreen';

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
        <path d="M3.1,7.6c-0.3,0-0.5-0.2-0.5-0.5V5.3c0-1.2,1-2.3,2.2-2.3h1.8c0.3,0,0.5,0.2,0.5,0.5S6.8,4.1,6.6,4.1H4.8 c-0.7,0-1.2,0.6-1.2,1.3v1.8C3.6,7.4,3.3,7.6,3.1,7.6z"></path>
        <path d="M15.3,18.1h-1.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.8c0.7,0,1.2-0.6,1.2-1.2v-1.8 c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1.8C17.6,17.1,16.6,18.1,15.3,18.1z"></path>
        <circle cx="10.2" cy="10.4" r="1.1"></circle>
      </svg>
    </IconWrapper>
  );
};

export default IconFullscreen;
