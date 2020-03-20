import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      comments: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      comments: event.currentTarget.value
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            this.props.handleUpdateComments(
              event,
              this.props.post,
              this.state.comments
            );
            this.setState({
              comments: ""
            });
          }}
        >
         <div class="form-group">

          <input
            type="textbox"
            id="comments"
            class="form-control"
            name="comments"
            onChange={this.handleChange}
            value={this.state.comments}
            placeholder="Comment..."
          />
      </div>
          <input class="btn btn-primary" type="submit" value="Add Comment" />
        </form>
      </div>
    );
  }
}

export default Comment;
