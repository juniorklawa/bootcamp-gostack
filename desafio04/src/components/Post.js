import React from 'react';
import './Post.css';
import Comment from './Comment';

export default function Post({ post }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: 700,
        padding: 16,
        marginTop: 24,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <img
          style={{ height: 80, width: 80, marginRight: 8 }}
          src={post.author.avatar}
        />
        <div>
          <h4>{post.author.name}</h4>
          <p style={{ color: '#9a9a9a' }}>{post.date}</p>
        </div>
      </div>
      <p style={{ marginTop: 10, marginLeft: 10, color: '#3e3e3e' }}>
        {post.content}
      </p>
      <div>
        <div
          style={{
            marginTop: 24,
            backgroundColor: '#eee',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            height: 2,
          }}
        />
      </div>

      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
