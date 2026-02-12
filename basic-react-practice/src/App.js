import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const createPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post from React",
      body: "This post was created using a POST request.",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Created Post:", data);
      alert("Post created successfully! Check console.");
    })
    .catch((error) => console.error("Error creating post:", error));
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>REST API Practice - Week 4</h1>
      <button onClick={createPost} style={{ marginBottom: "20px" }}>
  Create New Post (POST)
</button>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
