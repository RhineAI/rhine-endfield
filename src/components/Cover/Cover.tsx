"use client";

import { useEffect, useState } from "react";
import Center from "@/components/Center/Center";
import styles from "./Cover.module.sass";
import clsx from "clsx";

export default function Cover() {
  const text = [
    {
      title: "placeholder",
      content: "placeholder",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [text.length]);

  useEffect(() => {
    const rightElement = document.querySelector(".Cover .Right");
    if (rightElement) {
      rightElement.classList.remove("fade-in");
      rightElement.classList.add("fade-out");

      setTimeout(() => {
        rightElement.classList.remove("fade-out");
        rightElement.classList.add("fade-in");
      }, 500);
    }
  }, [index]);

  return (
    <div className={styles.cover}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.title}>Title Placeholder</div>
          <div className={styles.tip}></div>
          <div className={styles.buttons}>
            <div className={clsx(styles.button, styles.quickStart)}>
              placeholder
            </div>
            <div className={clsx(styles.button, styles.browserExample)}>
              placeholder
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <Center />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{text[index].title}</div>
          <div className={styles.textHolder}>
            <div className={styles.text}>{text[index].content}</div>
          </div>
        </div>
      </div>
      <div className={styles.blackBorder} />
    </div>
  );
}
