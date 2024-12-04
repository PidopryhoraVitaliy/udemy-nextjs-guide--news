import { DUMMY_NEWS } from "@/dummy-news";

export function GET(request) {
    return new Response(JSON.stringify(DUMMY_NEWS));
}