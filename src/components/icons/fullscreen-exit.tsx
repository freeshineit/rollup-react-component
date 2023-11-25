import IconWrapper from './IconWrapper';

/**
 * @description exit fullscreen icon
 * @returns
 */
const IconFullscreenExit = () => {
  const type = 'fullscreen-exit';

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
        <path d="M5.4,8.1H3.5C3.2,8.1,3,7.9,3,7.6s0.2-0.5,0.5-0.5h1.9c0.8,0,1.4-0.6,1.4-1.4V3.8c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1.9C7.7,7,6.7,8.1,5.4,8.1z"></path>
        <path d="M13.1,17.7c-0.3,0-0.5-0.2-0.5-0.5v-1.9c0-1.3,1.1-2.4,2.4-2.4h1.9c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H15c-0.8,0-1.4,0.6-1.4,1.4v1.9C13.6,17.4,13.4,17.7,13.1,17.7z"></path>
        <circle cx="10.2" cy="10.4" r="1.1"></circle>
      </svg>
    </IconWrapper>
  );
};

export default IconFullscreenExit;
