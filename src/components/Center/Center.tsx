import CoverLineWhiteA from "@/components/Center/svg/line-white-a.svg";
import CoverLineWhiteB from "@/components/Center/svg/line-white-b.svg";
import CoverLineWhiteC from "@/components/Center/svg/line-white-c.svg";
import CoverLineWhiteD from "@/components/Center/svg/line-white-d.svg";
import CoverLineOrange from "@/components/Center/svg/line-orange.svg";
import Blocks from "@/components/Center/Blocks";
import styles from "./Center.module.sass";
import clsx from "clsx";

export default function Center() {
  return (
    <div className={styles.center}>
      <div className={clsx(styles.circle, styles.circleA)} />
      <div className={clsx(styles.circle, styles.circleB)} />
      <Blocks />
      <div className={clsx(styles.circle, styles.circleC)} />
      <CoverLineWhiteA
        className={clsx(styles.line, styles.lineA)}
        viewBox="0 0 1024 1024"
      />
      <CoverLineWhiteB
        className={clsx(styles.line, styles.lineB)}
        viewBox="0 0 1024 1024"
      />
      <CoverLineWhiteC
        className={clsx(styles.line, styles.lineC)}
        viewBox="0 0 1024 1024"
      />
      <CoverLineWhiteD
        className={clsx(styles.line, styles.lineD)}
        viewBox="0 0 1024 1024"
      />
      <CoverLineOrange
        className={clsx(styles.line, styles.lineM)}
        viewBox="0 0 1024 1024"
      />
    </div>
  );
}
