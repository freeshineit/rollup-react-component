import './style.scss';
import cls from 'classnames';

/**
 *
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  type: string;
}

const EZ_ICON_PREFIX = 'ez-icon';

/**
 *
 * @param props
 * @returns
 */
const IconWrapper = (props: IconProps) => {
  const classNames = cls(EZ_ICON_PREFIX, `${EZ_ICON_PREFIX}-${props.type}`);
  return <span role="img" {...props} className={classNames} />;
};

export default IconWrapper;
