import { useEffect, useRef, useState } from 'react';

import styles from '@/components/404/(content)/not-found.module.css';

type ColorSet = 'blue' | 'red';

const messages = {
  calm: [
    'SCANNING FOR LOST PAGE...',
    'REQUEST RETURNED NULL',
    'PATH NOT INDEXED',
    'SEARCHING DATABANKS...',
    'ERROR CODE: 404',
  ],
  angry: [
    '!! STOP SHOOTING ME !!',
    'HOSTILE TARGET DETECTED',
    'MY GEARS! MY BEAUTIFUL GEARS!',
    'INITIATING RAGE PROTOCOL',
    'I\'LL REPORT YOU TO MY CREATOR',
  ],
};

export const useRobot = () => {
  const [isAngry, setIsAngry] = useState(false);
  const [message, setMessage] = useState(messages.calm[0]);
  const [hovering, setHovering] = useState(false);

  const robotRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const msgIntervalRef = useRef<number | undefined>(undefined);
  const angryTimeoutRef = useRef<number | undefined>(undefined);

  const colorSet: ColorSet = isAngry ? 'red' : 'blue';

  // Cursor movement
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Hover detection
  useEffect(() => {
    const robot = robotRef.current;
    if (!robot) return;

    const onMouseEnter = () => setHovering(true);
    const onMouseLeave = () => setHovering(false);

    robot.addEventListener('mouseenter', onMouseEnter);
    robot.addEventListener('mouseleave', onMouseLeave);

    return () => {
      robot.removeEventListener('mouseenter', onMouseEnter);
      robot.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Message cycling
  const startCalmMessages = () => {
    if (msgIntervalRef.current) clearInterval(msgIntervalRef.current);
    let i = 0;
    setMessage(messages.calm[0]);
    msgIntervalRef.current = window.setInterval(() => {
      i = (i + 1) % messages.calm.length;
      setMessage(messages.calm[i]);
    }, 2800);
  };

  const startAngryMessages = () => {
    if (msgIntervalRef.current) clearInterval(msgIntervalRef.current);
    let i = 0;
    setMessage(messages.angry[0]);
    msgIntervalRef.current = window.setInterval(() => {
      i = (i + 1) % messages.angry.length;
      setMessage(messages.angry[i]);
    }, 400);
  };

  // Trigger angry mode
  const triggerAngry = (x: number, y: number) => {
    if (angryTimeoutRef.current) clearTimeout(angryTimeoutRef.current);

    setIsAngry(true);
    startAngryMessages();
    spawnSparks(x, y, 10, true);
    angryTimeoutRef.current = window.setTimeout(() => {
      setIsAngry(false);
      startCalmMessages();
    }, 2500);
  };

  // Click handler for robot
  const handleRobotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    triggerAngry(e.clientX, e.clientY);
  };

  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (robotRef.current && robotRef.current.contains(e.target as Node)) return;
      spawnSparks(e.clientX, e.clientY, 4, false);
    };
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (msgIntervalRef.current) clearInterval(msgIntervalRef.current);
      if (angryTimeoutRef.current) clearTimeout(angryTimeoutRef.current);
    };
  }, []);

  return {
    robotRef,
    dotRef,
    ringRef,
    isAngry,
    colorSet,
    message,
    hovering,
    handleRobotClick,
  };
};

// Spark spawner using CSS module classes
const spawnSparks = (cx: number, cy: number, count: number, isHit: boolean) => {
  for (let i = 0; i < count; i++) {
    const spark = document.createElement('div');
    spark.classList.add(styles.spark);
    if (isHit) spark.classList.add(styles['angry-spark']);

    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 60;
    spark.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    spark.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    spark.style.left = cx + 'px';
    spark.style.top = cy + 'px';
    spark.style.animationDuration = 0.3 + Math.random() * 0.4 + 's';

    document.body.appendChild(spark);
    spark.addEventListener('animationend', () => spark.remove());
  }
};
