import styles from "./page.module.sass";
import Cover from "@/components/Cover/Cover";

export default function Page() {
  return (
    <div className={styles.page}>
      <Cover />
    </div>
  );
}
