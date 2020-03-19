import React from "react";
import New from "./New.js";
import Post from "./Post.js";
// import Signup from './Signup'
// import Signin from './Signin'
import Show from "./Show";

/*
********************************************************
          Define
********************************************************
*/
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

// else {
//
//  baseURL = ''
// }

console.log(baseURL);
/*
********************************************************
          Begin Class
********************************************************
*/

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      username: "",
      post: null,
      show: false
    };
    this.handleAddPost = this.handleAddPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.handleUpdatePost = this.handleUpdatePost.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleUpdateComments = this.handleUpdateComments.bind(this);
    this.toggleLikes = this.toggleLikes.bind(this);
    this.toggleShow = this.toggleShow.bind(this);

    // this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  /*
  ********************************************************
        WAITS FOR BROWSER BEFORE GRABS INFO FROM SERVER
    ********************************************************
    */

  componentDidMount() {
    this.getPosts();
    // this.getCurrentUser()
  }

  /*
     ********************************************************
                GRABS POST FROM SERVER
     ********************************************************
     */
  async getPosts() {
    try {
      let response = await fetch(`${baseURL}/butterfly`);

      let data = await response.json();
      console.log(data);

      this.setState({
        posts: data
      });
    } catch (e) {
      console.error(e);
    }
  }

  getPost(post) {
    this.setState({ post: post });
  }

  /*
       ********************************************************
                   ADDS NEW POST
       ********************************************************
       */

  handleAddPost(post) {
    const copyPosts = [post, ...this.state.posts];
    console.log(copyPosts);
    this.setState({
      posts: copyPosts,
      title: "",
      media: "",
      caption: ""
    });
  }

  handleSignin(user) {
    this.setState({
      username: user
    });
  }

  /*
       ********************************************************
                 Comments
       ********************************************************
       */

  /*
     ********************************************************
              update POSTS
     ********************************************************
     */
  async handleUpdatePost(event, post) {
    event.preventDefault();
    console.log(post._id);
    try {
      let response = await fetch(`${baseURL}/butterfly/${post._id}`, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let updatedPost = await response.json();
      const foundPostIndex = this.state.posts.findIndex(
        foundPost => foundPost._id === post._id
      );
      const copyPosts = [...this.state.posts];
      copyPosts[foundPostIndex] = updatedPost;
      this.setState({
        posts: copyPosts
      });
    } catch (e) {
      console.error(e);
    }
  }
  //      /*
  //     ********************************************************
  //             Update likes POSTS
  //     ********************************************************
  //     */

  async toggleLikes(post) {
    // console.log(post)
    try {
      let response = await fetch(`${baseURL}/butterfly/${post._id}`, {
        method: "PUT",
        body: JSON.stringify({ likes: post.likes + 1 }),
        headers: {
          "Content-type": "application/json"
        }
      });

      let updatedPost = await response.json();

      // console.log(updatedPost)

      const foundPost = this.state.posts.findIndex(
        postFound => postFound._id === post._id
      );
      // console.log(foundPost);

      const copyPosts = [...this.state.posts];
      // console.log(copyPosts);
      copyPosts[foundPost].likes = updatedPost.likes;

      // console.log(updatedPost);
      this.setState({
        posts: copyPosts
      });
    } catch (e) {
      console.error(e);
    }
  }

  /*
     ********************************************************
               Delete POSTS
     ********************************************************
     */

  async deletePost(id) {
    console.log(`deleted post:${baseURL}/butterfly/${id}`);

    try {
      let response = await fetch(`${baseURL}/butterfly/${id}`, {
        method: "DELETE"
      });

      let data = await response.json();

      const deletedPost = this.state.posts.findIndex(post => post._id === id);

      const copyPosts = [...this.state.posts];

      copyPosts.splice(deletedPost, 1);

      this.setState({
        posts: copyPosts
      });
    } catch (e) {
      console.error(e);
    }
  }

  async handleUpdateComments(event, post, comment) {
    event.preventDefault();
    console.log(post._id);
    let copyComments = [...this.state.post.comments];
    console.log(copyComments);
    copyComments.push(comment);
    try {
      let response = await fetch(`${baseURL}/butterfly/${post._id}`, {
        method: "PUT",
        body: JSON.stringify({
          comments: copyComments
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let updatedPost = await response.json();

      const foundPostIndex = this.state.posts.findIndex(
        foundPost => foundPost._id === post._id
      );
      const copyPosts = [...this.state.posts];
      copyPosts[foundPostIndex].comments = updatedPost.comments;
      console.log(copyPosts[foundPostIndex]);
      this.setState({
        posts: copyPosts,
        post: updatedPost
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="App">
        {/* <Signup baseURL={baseURL}/>
    {
      this.state.username
      ?
      <h1>Hi, {this.state.username}</h1>
      :
      <Signin
      handleSignin = {this.handleSignin}
      baseURL={baseURL}
      username={this.state.username}/>
    } */}
          <New baseURL={baseURL} handleAddPost={this.handleAddPost} />

        {this.state.posts.map(post => {
          return (
            <div class="content">
              <div key={post._id}>
                {post.image ? <img src={post.image}></img> : ""}
                {post.video ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`${post.video}?autoplay=1`}
                    frameBorder="0"
                  ></iframe>
                ) : (
                  ""
                )}
                <h4>{post.title}</h4>
                <p>{post.caption}</p>
              </div>
              <div
                onClick={() => {
                  this.toggleLikes(post);
                }}
              >
                {post.likes ? "❤️" : "🤍"}
              </div>
              <div>
                <button onClick={() => this.toggleShow()}>View Post</button>
                {this.state.show ? (
                  <Show
                    post={post}
                    handleUpdateComments={this.handleUpdateComments}
                  />
                ) : null}
              </div>
              <Post post={post} handleUpdatePost={this.handleUpdatePost} />
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  this.deletePost(post._id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
