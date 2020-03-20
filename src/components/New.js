import React from "react";
import Home from "./Home.js";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: "",
      image: "",
      video: "",
      caption: "",
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddPost = this.handleAddPost.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleAddPost(post) {
    const copyPosts = [post, ...this.state.posts];
    console.log(copyPosts);
    this.setState({
      posts: copyPosts,
      title: "",
      media: "",
      caption: "",
      redirect: false
    });
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }
  async handleSubmit() {
    this.setRedirect()
    try {
      let response = await fetch(this.props.baseURL + "/butterfly", {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          image: this.state.image,
          video: this.state.video,
          caption: this.state.caption
        }),
        headers: { "Content-Type": "application/json" }
      });
      let data = await response.json();
      this.handleAddPost(data);
      this.setState({
        title: "",
        image: "",
        video: "",
        caption: "",
        redirect: true
      });
    } catch (e) {
      console.error(e);
    }

  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      this.setRedirect();
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div class="text-primary" id="create">
        <div >
          {this.renderRedirect()}
        <div class='sign-in-div'>
        <form class='sign-in'>
          <div class="form-group">
            <label htmlFor="title">Title</label>
            <input
              class="form-control"
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Name Your Post"
            />
          </div>
          <div class="form-group">
            <label htmlFor="caption">Caption</label>
            <textarea
              class="form-control"
              type="text"
              id="caption"
              name="caption"
              onChange={this.handleChange}
              value={this.state.caption}
              placeholder="Put Your Caption"
            ></textarea>
          </div>
          <div class="form-group">
            <label htmlFor="image">Image</label>
            <input
              class="form-control"
              type="text"
              id="image"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
              placeholder="Upload Your Image"
            />
          </div>
          <div class="form-group">
            <label htmlFor="video">Video</label>
            <input
              class="form-control"
              type="text"
              id="video"
              name="video"
              onChange={this.handleChange}
              value={this.state.video}
              placeholder="Upload Your Video"
            />
          </div>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Submit
          </button>
        </form>
        </div>
        </div>

      </div>
    );
  }
}
export default New;
