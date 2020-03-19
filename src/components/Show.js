import React from "react";
import Comment from "./Comment";
import M from "materialize-css";

class Show extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     post: this.props.post,
  //
  //   }
  //
  //   // this.toggleShow = this.toggleShow.bind(this)
  // }

  render() {
    return (
      <div>
        <h1>Helloo from the other side</h1>
        <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
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
                <hr />
                {this.props.post.image ? (
                  <img src={this.props.post.image}></img>
                ) : (
                  ""
                )}

                {this.props.post.video ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`${this.props.post.video}?autoplay=1`}
                    frameBorder="0"
                  ></iframe>
                ) : (
                  ""
                )}
                <h4>{this.props.post.caption}</h4>
                <h6>
                  <span>Likes:</span> {this.props.post.likes}
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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Show;
