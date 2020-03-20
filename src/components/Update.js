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
      <div id = "no" >
            <div id = 'mainUpdate' >


        <form class='create-form'
          onSubmit={event => {
            this.props.handleUpdatePost(event, this.state);
            this.props.toggleForm();
          }}
        >

          <div class="form-group">
            <label htmlFor="title">Title</label>
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
            <label htmlFor="image">Image</label>
            <input
              class="form-control"
              type="text"
              id="image"
              name="image"
                placeholder="Upload Your Image"
              onChange={this.handleChange}
              value={this.state.image}
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
              placeholder="upload your video"
            />
          </div>

          <div class="form-group">
            <label htmlFor="caption">Caption</label>
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
        <input  id= "submit1" class="btn  btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    );
  }
}
export default Update;
