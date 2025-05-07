import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PostList from "./page/posts-page";
import PostDetail from "./page/detail-page";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
