import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
    const news = await getAllNews();
    return (
        <>
            <main>
                <NewsList news={news} />
            </main>
        </>
    );
}
