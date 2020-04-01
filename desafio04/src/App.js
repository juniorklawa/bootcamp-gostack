import React from 'react';
import './App.css';
import Header from './components/Header';

function Post({ data }) {
  return (
    <div
      style={{
        width: 700,
        height: 250,
        backgroundColor: 'red',
        marginTop: 16,
        marginBottom: 16,
      }}
    >
      <p>Oi</p>
    </div>
  );
}

function PostList() {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Julio Alcantara',
        avatar: 'http://url-da-imagem.com/imagem.jpg',
      },
      date: '04 Jun 2019',
      content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
      comments: [
        {
          id: 1,
          author: {
            name: 'Diego Fernandes',
            avatar: 'http://url-da-imagem.com/imagem.jpg',
          },
          content: 'Conteúdo do comentário',
        },
      ],
    },
    {
      id: 2,
      // Restante dos dados de um novo post
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
        <Post key={i} data={post} />
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
