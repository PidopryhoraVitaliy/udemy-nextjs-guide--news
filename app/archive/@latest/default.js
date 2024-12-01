import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage(params) {
    const latestNews = getLatestNews();

    return <>
        <h1>Latest News</h1>
        <NewsList news={latestNews} />
    </>
}