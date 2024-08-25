"use client";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./cardList.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const data = [
  {
    id: 1,
    header: "header",
    text: "text",
  },
  {
    id: 2,
    header: "header",
    text: "text",
  },
  {
    id: 3,
    header: "header",
    text: "text",
  },
  {
    id: 4,
    header: "header",
    text: "text",
  },
  {
    id: 5,
    header: "header",
    text: "text",
  },
];
export default function CardList() {
  const selectedBlock = useSelector(
    (state: RootState) => state.navBar.activeBlock
  );
  return (
    <section className={styles.cardListSection}>
      <p className={styles.header}>{selectedBlock}</p>
      <div className={styles.cardListWrapper}>
        {data.map((card) => {
          return (
            <Link
              href={`/article/${card.id}`}
              key={card.id}
              className={styles.link}
            >
              <ArticleCard
                header={card.header}
                text={card.text}
                key={card.id}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
