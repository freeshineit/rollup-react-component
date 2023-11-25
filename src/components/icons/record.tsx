import IconWrapper from './IconWrapper';

/**
 * @description record icon
 * @returns
 */
const IconRecord = () => {
  const type = 'record';

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
        <path d="M11.6,5.3H4.7c-1.4,0-2.5,1.1-2.5,2.5v5.9c0,1.4,1.1,2.5,2.5,2.5h6.9c1.4,0,2.5-1.1,2.5-2.5V7.7 C14.1,6.4,13,5.3,11.6,5.3z M4.7,6.3h6.9c0.8,0,1.5,0.7,1.5,1.5v5.9c0,0.8-0.7,1.5-1.5,1.5H4.7c-0.8,0-1.5-0.7-1.5-1.5V7.7 C3.3,6.9,3.9,6.3,4.7,6.3z"></path>
        <path d="M16.6,6.7c0.9-0.8,2.3-0.1,2.4,1l0,0.1v5.7c0,1.2-1.3,1.9-2.3,1.2l-0.1-0.1L13.3,12 c-0.2-0.2-0.2-0.5-0.1-0.7c0.2-0.2,0.4-0.2,0.6-0.1l0.1,0.1l3.3,2.7c0.3,0.2,0.7,0.1,0.8-0.3l0-0.1V7.8c0-0.4-0.4-0.6-0.7-0.4 l-0.1,0l-3.3,2.7c-0.2,0.2-0.5,0.1-0.7-0.1c-0.2-0.2-0.1-0.5,0-0.6l0.1-0.1L16.6,6.7z"></path>
      </svg>
    </IconWrapper>
  );
};

export default IconRecord;
