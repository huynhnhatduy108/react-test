import React from "react";
import { Link } from "react-router-dom";

export default function Post({ id, title, body }) {
  return (
    <div className="post-card" key={id}>
      <h3>{title}</h3>
      <p>{body.slice(0, 20)}...</p>
      <Link to={`/posts/${id}`} className="btn">
        Xem chi tiết
      </Link>
    </div>
  );
}
