import { Box, CircularProgress, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { IndexPageProps, Post } from '../types';

const createCups = (count: number) => {
  let result = [];

  for (let i = 0; i < Math.floor(count / 5); i++) {
    result.push('☕️');
  }
  return result;
};

const IndexPage: NextPage = ({ posts }: IndexPageProps) => {
  return (
    <div>
      <Head>
        <title>Overreacted — A blog by Dan Abramov</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {posts === undefined ? (
          <CircularProgress />
        ) : (
          posts.map((item) => (
            <Box>
              <Link href={`/posts/${item.id}`}>
                <a>
                  <Typography>{item.title}</Typography>
                </a>
              </Link>
              <Typography>
                {item.date}
                {createCups(item.readTime)}
                {item.readTime} min read
              </Typography>
              <Typography>{item.body}</Typography>
            </Box>
          ))
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  const d = new Date();

  return {
    props: {
      posts: posts.map((obj) => ({
        ...obj,
        date: d.setDate(d.getDate() - obj.id),
        readTime: Math.floor(Math.random() * 25),
      })),
    },
  };
}

export default IndexPage;
