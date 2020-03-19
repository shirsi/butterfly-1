import React from "react";
import Comment from "./Comment";
import Modal from "react-bootstrap/Modal";

class Show extends React.Component {

  componentDidMount() {
    const {post} = this.props.post
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

      <div>
        <button class="btn btn-primary togglecomments" type="button" data-toggle="collapse" data-target={"#collapseExample"} aria-expanded="false" aria-controls="collapseExample">
          View Comments
  </button>
 <div class="collapse" id={"collapseExample"}>
<div class="card card-body">




             <h4>{this.props.post.caption}</h4>
             <h6><span>Likes:</span>
              {this.props.post.likes}</h6>

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



      // <div>
      //
      //
      //   <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${this.props.post.id}`}>
      //     Launch demo modal
      //   </button>
      //
      //
      //   <div class="modal fade" id={`${this.props.post.id}`} tabindex="-1" role="dialog" aria-labelledby={`${this.props.post.id}Label`} aria-hidden="true">
      //     <div class="modal-dialog" role="document">
      //       <div class="modal-content">
      //         <div class="modal-header">
      //           <h5 class="modal-title" id={`${this.props.post.id}Label`}>Modal title</h5>
      //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      //             <span aria-hidden="true">&times;</span>
      //           </button>
      //         </div>
      //         <div class="modal-body">
      //           {`${this.props.post.title}Label`}
      //         </div>
      //         <div class="modal-footer">
      //           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      //           <button type="button" class="btn btn-primary">Save changes</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //
      //
      //
      //
      //
      //
      //
      //
      //   <h1>Helloo from the other side</h1>
      //   <div class="modal" tabindex="-1" role="dialog">
      //     <div class="modal-dialog" role="document">
      //       <div class="modal-content">
      //         <div class="modal-header">
      //           <h5 class="modal-title">Modal title</h5>
      //           <button
      //             type="button"
      //             class="close"
      //             data-dismiss="modal"
      //             aria-label="Close"
      //           >
      //             <span aria-hidden="true">&times;</span>
      //           </button>
      //         </div>
      //         <div class="modal-body">
      //           <hr />
      //           {this.props.post.image ? (
      //             <img src={this.props.post.image}></img>
      //           ) : (
      //             ""
      //           )}
      //
      //           {this.props.post.video ? (
      //             <iframe
      //               width="560"
      //               height="315"
      //               src={`${this.props.post.video}?autoplay=1`}
      //               frameBorder="0"
      //             ></iframe>
      //           ) : (
      //             ""
      //           )}
      //           <h4>{this.props.post.caption}</h4>
      //           <h6>
      //             <span>Likes:</span> {this.props.post.likes}
      //           </h6>
      //           <h6>Comments</h6>
      //           {this.props.post.comments.map(comment => {
      //             return <h6>{comment}</h6>;
      //           })}
      //           <Comment
      //             post={this.props.post}
      //             handleUpdateComments={this.props.handleUpdateComments}
      //           />
      //         </div>
      //         <div class="modal-footer">
      //           <button
      //             type="button"
      //             class="btn btn-secondary"
      //             data-dismiss="modal"
      //           >
      //             Close
      //           </button>
      //           <button type="button" class="btn btn-primary">
      //             Save changes
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}
export default Show;

// body
