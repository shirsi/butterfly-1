import React, { Component } from "react";
class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.post._id,
      title: "",
      image: "",
      video: "",
      caption: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.post) {
      this.setState({
        title: this.props.post.title,
        image: this.props.post.image,
        video: this.props.post.video,
        caption: this.props.post.caption,
        _id: this.props.post._id
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }
  render() {
    return (
      <div class="text-primary">
        <h1>Update Form</h1>
        <form

          onSubmit={event => {
            this.props.handleUpdatePost(event, this.state);
            this.props.toggleForm();
          }}
        >
          <div class="form-group">
            <label htmlFor="title">title</label>
            <input
              class="form-control"
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>

          <div class="form-group">
            <label htmlFor="image">image</label>
            <input
              class="form-control"
              type="text"
              id="image"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>

          <div class="form-group">
            <label htmlFor="video">video</label>
            <input
              class="form-control"
              type="text"
              id="video"
              name="video"
              onChange={this.handleChange}
              value={this.state.video}
              placeholder="upload your video"
            />
          </div>

          <div class="form-group">
            <label htmlFor="caption">caption</label>
            <input
              class="form-control"
              type="text"
              id="caption"
              name="caption"
              onChange={this.handleChange}
              value={this.state.caption}
              placeholder="put your caption"
            />
          </div>
          <input class="form-control" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Update;
