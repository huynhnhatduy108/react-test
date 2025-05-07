import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">← Quay lại danh sách</Link>
    </div>
  );
}

export default PostDetail;
