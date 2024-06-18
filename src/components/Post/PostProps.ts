export interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

export interface Post {
  id: number;
  author: Author;
  publishedAt: string;
  content: Array<{ type: string; content: string }>;
}

export interface PostProps {
  post: Post;
}