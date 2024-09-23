import styles from "./loader.module.css";
import Icon from "../Icon/Icon";
export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Icon name="loader" />
    </div>
  );
}
