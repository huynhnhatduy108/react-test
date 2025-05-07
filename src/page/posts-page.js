import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Thêm CSS riêng

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h1>Danh sách bài viết</h1>
      <div className="post-list">
        {posts.map(post => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 20)}...</p>
            <Link to={`/posts/${post.id}`} className="btn">Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
