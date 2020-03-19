import React from "react";
import Comment from "./Comment";
import Modal from "react-bootstrap/Modal";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      close: false
    }
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose(){
    this.setState({close: !this.state.close})
  }

  // showModal() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // }

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
      <>
      <h1>HELLO FROM THE OTHER SIDE</h1>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.post.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default Show;

// body
