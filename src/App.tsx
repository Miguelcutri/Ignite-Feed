import React from "react";
import "./global.css";


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import styles from './App.module.css'
import Post from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      name: 'Miguel Cutri',
      avatarUrl: 'https://github.com/miguelcutri.png',
      role: 'Software Developer'
  },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        type: 'paragraph',
        content: 'Nullam nec purus quis sapien tincidunt vehicula. Donec eget sapien nec nunc luctus ultricies.'
      },
      {
        type: 'paragraph',
        content: 'Nullam et arcu vitae nunc luctus ultricies. Nullam et arcu vitae.'
      }
    ],
    publishedAt: '2024-05-28T11:40:00',
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat'
  },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        type: 'paragraph',
        content: 'Nullam nec purus quis sapien tincidunt vehicula. Donec eget sapien nec nunc luctus ultricies.'
      },
      {
        type: 'paragraph',
        content: 'Nullam et arcu vitae nunc luctus ultricies. Nullam et arcu vitae.'
      }
    ],
    publishedAt: '2024-05-05T11:40:00',
  },
]

export interface Post {
  id: number;
  author: string;
  content: string;
  publishedAt: string;
}

function App() {
  return (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => (
          <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}/>
        ))
        }
      </main>
    </div>
  </div>
  );
}

export default App;
