import IconWrapper from './IconWrapper';

/**
 * @description play icon
 * @returns
 */
const IconPlay = () => {
  const type = 'play';
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
        <path d="M10.5,1.7c-4.9,0-8.8,4-8.8,8.8s4,8.8,8.8,8.8s8.8-4,8.8-8.8S15.4,1.7,10.5,1.7z M10.5,2.7c4.3,0,7.8,3.5,7.8,7.8s-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8S6.2,2.7,10.5,2.7z" />
        <path d="M8.7,8C9,8,9.3,8.3,9.3,8.6v3.8C9.3,12.7,9,13,8.7,13C8.3,13,8,12.7,8,12.4V8.6C8,8.3,8.3,8,8.7,8z" />
        <path d="M12.8,8c0.3,0,0.6,0.3,0.6,0.6v3.8c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6V8.6C12.2,8.3,12.5,8,12.8,8z" />
      </svg>
    </IconWrapper>
  );
};

export default IconPlay;
