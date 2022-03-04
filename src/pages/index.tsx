import { Box, CircularProgress, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { IndexPageProps, Post } from '../types';
import styles from '../styles/Home.module.css';

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
        <Box className={styles.author}>
          <Image
            src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
            alt='Dan Abramov'
            width='60rem'
            height='60rem'
          />
          <Typography>
            Personal blog by{' '}
            <Typography variant='h3' component='span'>
              <a href='https://mobile.twitter.com/dan_abramov'>Dan Abramov</a>
            </Typography>
            . I explain with words and code.
          </Typography>
        </Box>
        {posts === undefined ? (
          <CircularProgress />
        ) : (
          posts.map((item) => (
            <Box key={item.id} className={styles.post}>
              <Link href={`/posts/${item.id}`}>
                <a>
                  <Typography variant='h3'>{item.title}</Typography>
                </a>
              </Link>
              <Typography variant='caption'>
                {new Date(item.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                {createCups(item.readTime)} {item.readTime} min read
              </Typography>
              <Typography>{item.body}</Typography>
            </Box>
          ))
        )}
      </main>
      <footer className={styles.footer}>
        <Typography variant='h3' component='span'>
          <a href='https://mobile.twitter.com/dan_abramov'>twitter</a> •{' '}
          <a href='https://github.com/gaearon'>github</a> •{' '}
          <a href='https://stackoverflow.com/users/458193/dan-abramov'>
            stack overflow
          </a>
          <a href='https://overreacted.io/rss.xml'>rss</a>
        </Typography>
      </footer>
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
