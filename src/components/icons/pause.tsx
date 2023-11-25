import IconWrapper from './IconWrapper';

/**
 * @description pause icon
 * @returns
 */
const IconPause = () => {
  const type = 'pause';

  return (
    <IconWrapper type={type}>
      <svg
        viewBox="1 1 19 19"
        focusable="false"
        data-icon={type}
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13,9.8L10.1,8C9.9,7.9,9.7,7.9,9.5,7.9c-0.6,0-1,0.4-1,1v3.7c0,0.2,0.1,0.4,0.2,0.5c0.3,0.5,0.9,0.6,1.4,0.3 l2.9-1.8c0.1-0.1,0.2-0.2,0.3-0.3C13.6,10.7,13.4,10.1,13,9.8z" />
        <path d="M10.5,1.7c-4.9,0-8.8,4-8.8,8.8s4,8.8,8.8,8.8s8.8-4,8.8-8.8S15.4,1.7,10.5,1.7z M10.5,2.7c4.3,0,7.8,3.5,7.8,7.8s-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8S6.2,2.7,10.5,2.7z" />
      </svg>
    </IconWrapper>
  );
};

export default IconPause;
