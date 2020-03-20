import React, { Component } from 'react';
import Update from './Update'
class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      _id: this.props.post._id,
      showForm: true
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  toggleForm(){
    this.setState({
      showForm : !this.state.showForm
    })
  }
  render(){
    return(
      <div>
        {
          this.state.showForm
          ?
          (<div>

            {post.image ? (
                        <img src={post.image}></img>
                      ) : (
                        ""
                      )}

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
                <div class= "thoughts">
            <h2 onClick={()=>this.getPost(post)}>{post.title}</h2>
              <div onClick={() => {
                this.toggleLikes(post)
              }}>{
                post.likes? '❤️': '🤍'
              }
              </div>
              </div>
              <Show
              post={post} handleUpdateComments={this.handleUpdateComments}/>

          </div>

            <button onClick={() => {
              this.deletePost(post._id)
            }}>delete</button>



          </div>)
          :

          <Update handleUpdatePost={this.props.handleUpdatePost}
          post={this.props.post}
          toggleForm={this.toggleForm}/>







        }


      </div>
      <button type="button" class="btn btn-dark" onClick={this.toggleForm}>Update</button>
    )
  }
}
export default Post
