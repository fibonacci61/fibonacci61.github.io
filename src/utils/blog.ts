export type BlogPost = {
    slug: string;
    data: {
        title: string;
        date: string;
        tags?: string[];
    };
    render: () => Promise<{ Content: any }>;
    content: any;
    url: string;
};

export function postsWithUrls(posts: any[]): BlogPost[] {
    return posts.map((post) => ({
        ...post,
        url: "/" + post.slug,
    })) as BlogPost[];
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
    return posts.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
}

export function getAllTags(posts: BlogPost[]): string[] {
    let tags = new Set<string>();

    for (let post of posts) {
        for (let tag of post.data.tags ?? []) {
            tags.add(tag);
        }
    }

    return [...tags].sort((a, b) => a.localeCompare(b));
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
    return posts.filter((post) => (post.data.tags ?? []).includes(tag));
}

export function tagHref(tag: string): string {
    return "/tags/" + encodeURIComponent(tag);
}
