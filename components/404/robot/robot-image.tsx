import Image from 'next/image';

import styles from './robot-image.module.css';

type RobotImageProps = {
  ref: React.RefObject<HTMLDivElement>;
  isAngry: boolean;
  colorSet: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const RobotImage = ({ isAngry, ref, colorSet, onClick }: RobotImageProps) => {
  const floatingClasses = !isAngry ? 'animate-[float_3s_ease-in-out_infinite]' : styles.shake;

  return (
    <div ref={ref} className="relative my-10 flex justify-center" onClick={onClick}>
      <Image src="/images/404/robot/robot-arm-left.png"
        width={80}
        height={80}
        alt="Robot"
        className={`absolute left-6 top-14 origin-bottom-right ${isAngry ? styles['animate-arm-left'] : floatingClasses}`}
        style={{ width: 80, height: 80 }}
      />
      <Image src="/images/404/robot/robot-arm-right.png"
        width={80}
        height={80}
        alt="Robot"
        className={`absolute right-6 top-14 origin-bottom-left ${isAngry ? styles['animate-arm-right'] : floatingClasses}`}
        style={{ width: 80, height: 80 }}
      />
      <Image src={`/images/404/robot/robot-body-${colorSet}.png`}
        width={300}
        height={300}
        alt="Robot"
        className={`${floatingClasses} z-1`}
      />
      <Image src={`/images/404/robot/robot-head-${colorSet}.png`}
        width={300}
        height={300}
        alt="Robot"
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 ${floatingClasses} z-2`}
      />
    </div>
  );
};
