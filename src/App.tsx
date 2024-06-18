import React from "react";
import "./global.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import styles from './App.module.css';
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
        content: 'The Ignite Feed project is a social media feed application developed for me.'
      },
      {
        type: 'paragraph',
        content: 'This project focuses on building a complete application using modern web development technologies such as React, TypeScript, and CSS Modules.'
      },
      {
        type: 'paragraph',
        content: 'Through this project, developers learn best practices for structuring React applications, managing state, and creating reusable components. The Ignite Feed also covers topics like form handling, validation, and dynamic content rendering.'
      },
      {
        type: 'paragraph',
        content: 'The Ignite Feed allows users to post updates, comment on posts, and like their favorite content. It simulates the core functionalities of a social media platform, providing a practical learning experience for aspiring developers.'
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
        content: 'The Ignite Feed project is a flagship project of the Rocketseat Ignite course, designed to help developers master modern web development practices.'
      },
      {
        type: 'paragraph',
        content: 'Throughout the course, students build a social media feed application from scratch, using technologies such as React for building user interfaces, TypeScript for type safety, and CSS Modules for styling.'
      },
      {
        type: 'paragraph',
        content: 'The project emphasizes the importance of component-based architecture, state management, and the use of hooks in React. By the end of the course, developers are equipped with the skills to build scalable and maintainable web applications.'
      },
      {
        type: 'paragraph',
        content: 'The Ignite Feed provides functionalities such as user authentication, creating and editing posts, adding comments, and liking posts. It is an excellent practice project for those looking to understand the intricacies of full-stack development.'
      }
    ],
    publishedAt: '2024-05-05T11:40:00',
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              post={post}
               />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;