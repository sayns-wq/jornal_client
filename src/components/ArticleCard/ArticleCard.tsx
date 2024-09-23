import { ReactElement } from "react";
import styles from "./articleCard.module.css";
import Icon from "../Icon/Icon";

type ArticleCardProps = {
  header: string;
  text: string;
  id: number;
  deleteArticle: any;
};
export default function ArticleCard({
  header,
  text,
  deleteArticle,
  id,
}: ArticleCardProps): ReactElement<ArticleCardProps> {
  return (
    <section className={styles.card}>
      <div className={styles.textWrapper}>
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
      <div
        className={styles.deleteButton}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          deleteArticle(id);
        }}
      >
        <Icon name="trash" />
      </div>
    </section>
  );
}
