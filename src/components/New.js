import React from "react";
class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      video: "",
      caption: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
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
      this.props.handleAddPost(data);
      this.setState({
        title: "",
        image: "",
        video: "",
        caption: ""
      });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div>
        <div class="navbar">
          <button
            type="button"
            class="btn btn-primary sitcky"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Create Post
          </button>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          tabindex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Create New Butterfly
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
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
                  <div class="modal-footer">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={this.handleSubmit}
                      data-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default New;
