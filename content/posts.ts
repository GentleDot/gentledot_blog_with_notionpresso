import newPost from '../notion-data/1467ff6c-518b-802c-a51d-df8e53643bab.json'

const posts = [
    {
        title: "test",
        slug: "portfolio",
        content: newPost,
        date: "2024-11-22",
        description: "about gentledot",
        image: undefined
    }

] as Post[];

export default posts;

export type Post = {
    title: string;
    slug: string;
    content: { blocks: any[] };
    date: string;
    description: string;
    image?: string;
};
