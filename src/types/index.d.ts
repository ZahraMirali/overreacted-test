export declare type Post = {
  id: number;
  title: string;
  body: string;
  date: Date;
  readTime: number;
};

export declare type IndexPageProps = {
  posts?: Post[];
};

export declare type PostPageProps = {
  post?: Post;
};
