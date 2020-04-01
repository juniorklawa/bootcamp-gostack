import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

function PostList() {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Julio Alcantara',
        avatar: 'https://i.ya-webdesign.com/images/circle-avatar-png-4.png',
      },
      date: '04 Jun 2019',
      content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
      comments: [
        {
          id: 1,
          author: {
            name: 'Diego Fernandes',
            avatar: 'https://brentmanke.com/wp-content/uploads/2013/01/avatar-2015-circle-260.png',
          },
          content: 'Conteúdo do comentário',
        },
      ],
    },
  ];

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
