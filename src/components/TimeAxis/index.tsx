import { useEffect, useRef, useState } from 'react';
import TimeAxisLib from './TimeAxis';

/**
 * 实现线的样式
 */
interface TimeAxisLineStyle {
  width: number; // 线宽
  color: string; // 线的颜色
}

/**
 * 时刻的样式
 */
interface TimeAxisPointStyle {
  width: number; // 时刻宽
  color: string; // 时刻颜色
  spacing: number; // 间距 单位秒 默认一秒
}

interface TimeAxisProps {
  height?: number;
  line?: TimeAxisLineStyle;
  currentTime?: number; // 当前时间  时间戳 单位秒 (3600s)
  onChange?: (time?: number) => void;
  onDrag?: () => void;
}

const TimeAxis = (props: TimeAxisProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [timeAxisInstant, setTimeAxisInstant] = useState<TimeAxisLib | null>(null);

  useEffect(() => {
    if (ref.current)
      setTimeAxisInstant(
        new TimeAxisLib({
          container: ref.current,
        }),
      );
  }, []);

  return <div style={{ backgroundColor: 'red', display: 'flex' }} ref={ref}></div>;
};

export default TimeAxis;
