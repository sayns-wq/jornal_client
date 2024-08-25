import { ReactElement } from "react";
import styles from "./articleCard.module.css";

type ArticleCardProps = {
  header: string;
  text: string;
};
export default function ArticleCard({
  header,
  text,
}: ArticleCardProps): ReactElement<ArticleCardProps> {
  return (
    <section className={styles.card}>
      <h4>{header}</h4>
      <p>{text}</p>
    </section>
  );
}
