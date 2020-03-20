import React from "react";
import Comment from "./Comment";

class Show extends React.Component {
  componentDidMount() {
    const { post } = this.props.post;
  }
  handleClose() {
    this.setState({ close: !this.state.close });
  }
  render() {
    return (
      <div>
        <button
          class="btn btn-primary togglecomments"
          type="button"
          data-toggle="collapse"
          data-target={"#collapseExample"}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          View Comments
        </button>
        <div class="collapse" id={"collapseExample"}>
          <div class="card card-body text-white bg-dark">
            <h4>{this.props.post.caption}</h4>
            <h6>
              <span>Likes:</span>
              {this.props.post.likes}
            </h6>

            <h6>Comments</h6>
            {this.props.post.comments.map(comment => {
              return <h6>{comment}</h6>;
            })}
            <Comment
              post={this.props.post}
              handleUpdateComments={this.props.handleUpdateComments}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Show;
