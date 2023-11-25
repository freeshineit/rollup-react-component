import IconWrapper from './IconWrapper';

const IconZoom = () => {
  const type = 'zoom';

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
        // viewBox="5 -6 5 32"
      >
        <path
          d="M8.8,2.6c3.5,0,6.2,2.8,6.2,6.2s-2.8,6.2-6.2,6.2s-6.2-2.8-6.2-6.2S5.3,2.6,8.8,2.6z M8.8,3.9
            c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S11.5,3.9,8.8,3.9z M12.7,12.7l3.9,3.9"
        ></path>
        <path d="M11.2,9.5h-5c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6h5c0.3,0,0.6,0.3,0.6,0.6S11.6,9.5,11.2,9.5z"></path>
        <path d="M8.7,12c-0.3,0-0.6-0.3-0.6-0.6v-5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v5C9.3,11.8,9.1,12,8.7,12z"></path>
        <path
          d="M16.9,17.6c-0.1,0-0.3-0.1-0.4-0.2l-3.9-3.9c-0.2-0.2-0.2-0.6,0-0.8s0.6-0.2,0.8,0l3.9,3.9
            c0.2,0.2,0.2,0.6,0,0.8C17.2,17.5,17,17.6,16.9,17.6z"
        ></path>
      </svg>
    </IconWrapper>
  );
};

export default IconZoom;
