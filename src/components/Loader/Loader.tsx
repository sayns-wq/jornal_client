import loader from "@/images/bouncing-circles.svg";
import Image from "next/image";
import styles from "./loader.module.css";
export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Image src={loader} alt="loader" />
    </div>
  );
}
