import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        `${baseURL}
    `
      )
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }, []);
  if (!post) return "No post!";

  return (
    <div className="app">
      <h2>All Posts 📫</h2>
      {post.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="button">
              <div className="delete-btn">Delete</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // function getallpost() {
  //   axios.get(`${baseURL}`).then((response) => {
  //     setPost(response.data);
  //     console.log(response.data);
  //   });
  // }

  // function createPost() {
  //   axios
  //     .post(baseURL, {
  //       title: "Hello World!",
  //       body: "This is a new post.",
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (error) return `Error: ${error.message}`;

  // return (
  //   <div>
  //     <h1>{post.title}</h1>
  //     <p>{post.body}</p>
  //     <button onClick={createPost}>Create Post</button>
  //   </div>
  // );

  // return (
  //   <div>
  //     <ul>
  //       {post.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //     {/* <h1>{post.title}</h1>
  //     <p>{post.body}</p>
  //     <button onClick={createPost}>Create Post</button> */}
  //   </div>
  // );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
