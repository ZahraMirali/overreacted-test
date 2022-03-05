import { Box, CircularProgress, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PostPageProps, Post } from '../../types';
import styles from '../../styles/Post.module.css';
import PrimaryTypography from '../../components/PrimaryTypography';

const PostPage: NextPage = ({ post }: PostPageProps) => {
  return (
    <div>
      <Head>
        <title>{post.title || 'Post Page'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {post === undefined ? (
          <CircularProgress />
        ) : (
          <Box className={styles.post}>
            <PrimaryTypography variant='h3'>{post.title}</PrimaryTypography>
            <Typography>{post.body}</Typography>
          </Box>
        )}
      </main>
    </div>
  );
};

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
export default PostPage;
