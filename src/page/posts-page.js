import React, { useEffect, useState } from 'react';
import './styles.css';
import Post from '../components/post';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  

  return (
    <div className="container">
      <h1>Danh sách bài viết</h1>
      <div className="post-list">
        {posts.map(post => (
        <Post id={post.id} title={post.title} body={post.body}/>
        ))}
      </div>
    </div>
  );
}

export default PostList;
