export interface PageSchema {
    page_name: string,
    href: string,
}

export const PAGE_INFO: PageSchema[] = [
    {
        page_name: "Về chúng mình",
        href: "/about",
    },
    {
        page_name: "Thư viện ảnh",
        href: "/gallery",
    },
    {
        page_name: "Workshop",
        href: "/workshop",
    },
    {
        page_name: "Recruit",
        href: "/recruit",
    }
]