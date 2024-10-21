"use client";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./cardList.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  useDeleteOneArticleMutation,
  useGetAllArticlesWithLimitQuery,
} from "@/store/api/articleApi";
import Loader from "@/components/Loader/Loader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { LegacyRef, useState } from "react";

const PORTION_OF_ITEMS = 10;

export default function CardList() {
  const [limit, setLimit] = useState<number>(PORTION_OF_ITEMS);
  const { data, isLoading } = useGetAllArticlesWithLimitQuery(limit);
  const [deleteArticle] = useDeleteOneArticleMutation();
  const { ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 1,
    onChange: (entry) => {
      if (entry.isIntersecting && !(data && data.length < limit))
        setLimit((prev: number) => prev + PORTION_OF_ITEMS);
    },
  });

  const selectedBlock = useSelector(
    (state: RootState) => state.navBar.activeBlock
  );
  return (
    <section className={styles.cardListSection}>
      <p className={styles.header}>{selectedBlock}</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.cardListWrapper}>
          {data &&
            data.map((card: any, index: number, arr: any) => {
              return (
                <Link
                  href={`/article/${card.id}`}
                  key={card.id}
                  className={styles.link}
                  ref={
                    index == arr.length - 1
                      ? (ref as unknown as LegacyRef<HTMLAnchorElement>)
                      : undefined
                  }
                >
                  <ArticleCard
                    header={card.header}
                    text={card.createdAt}
                    deleteArticle={deleteArticle}
                    id={card.id}
                    key={card.id}
                  />
                </Link>
              );
            })}
        </div>
      )}
    </section>
  );
}
