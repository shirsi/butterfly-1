import React from "react";
import Update from "./Update";
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
      showForm: true,
      comments: []
    };
    this.deletePost = this.deletePost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.handleUpdatePost = this.handleUpdatePost.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleUpdateComments = this.handleUpdateComments.bind(this);
    this.toggleLikes = this.toggleLikes.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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

  handleSignin(user) {
    this.setState({
      username: user
    });
  }
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
    try {
      let response = await fetch(`${baseURL}/butterfly/${post._id}`, {
        method: "PUT",
        body: JSON.stringify({ likes: post.likes + 1 }),
        headers: {
          "Content-type": "application/json"
        }
      });

      let updatedPost = await response.json();

      const foundPost = this.state.posts.findIndex(
        postFound => postFound._id === post._id
      );
      const copyPosts = [...this.state.posts];
      copyPosts[foundPost].likes = updatedPost.likes;
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
    let copyComments = [...post.comments];
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

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showForm ? (
          <div >
            {this.state.posts.map(post => {
              return (
                <div class = 'border border-primary rounded post'>
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
                  <div>
                    <div class="thoughts">
                      <h2 onClick={() => this.getPost(post)}>{post.title.toUpperCase()}</h2>


                      <div
                        onClick={() => {
                          this.toggleLikes(post);
                        }}
                      >
                        {post.likes ? "❤️" : "🤍"}
                      </div>

                    </div>
                      <div class = 'caption'>  <p>{post.caption}</p></div>
                    <Show
                      post={post}
                      handleUpdateComments={this.handleUpdateComments}
                    />
                  </div>
                  <div id='changes'>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onClick={() => {
                      this.toggleForm();
                      this.getPost(post);
                    }}
                  >
                    Update
                  </button>

                  <button
                  type="button"
                  class="float-right btn btn-danger btn-sm"
                    onClick={() => {
                      this.deletePost(post._id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        ) : (
          <Update
            handleUpdatePost={this.handleUpdatePost}
            post={this.state.post}
            toggleForm={this.toggleForm}
          />
        )}
      </div>
    );
  }
}

export default Home;
