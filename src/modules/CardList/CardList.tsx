"use client";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./cardList.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetAllArticlesQuery } from "@/store/api/articleApi";

export default function CardList() {
  const { data, isLoading } = useGetAllArticlesQuery(null);

  const selectedBlock = useSelector(
    (state: RootState) => state.navBar.activeBlock
  );
  return (
    <section className={styles.cardListSection}>
      <p className={styles.header}>{selectedBlock}</p>
      {isLoading ? (
        <>loading</>
      ) : (
        <div className={styles.cardListWrapper}>
          {data.data.map((card: any) => {
            return (
              <Link
                href={`/article/${card.id}`}
                key={card.id}
                className={styles.link}
              >
                <ArticleCard header={card.id} text={card.id} key={card.id} />
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
