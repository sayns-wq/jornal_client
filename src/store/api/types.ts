export interface IArticleData {
  id: number;
  articleData: string;
  createdAt: string;
  header: string | null;
  tags: string;
}
export interface IAllArticles {
  data: IArticleData[];
  status: string;
}
