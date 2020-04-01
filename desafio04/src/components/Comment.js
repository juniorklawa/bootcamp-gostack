import React from 'react';
import './Comment.css';
export default function Comment({ comment }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <img
          style={{ height: 65, width: 65, marginRight: 8 }}
          src={comment.author.avatar}
        />
        <div
          style={{
            backgroundColor: '#EEE',
            borderRadius: 8,
            padding: 4,
            marginTop: 16,
            alignItems: 'center',
          }}
        >
          <p
            style={{
              marginTop: 10,
              marginLeft: 10,
              color: '#3e3e3e',
              width: 240,
            }}
          >
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
}
