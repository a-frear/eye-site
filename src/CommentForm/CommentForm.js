import React, {Component } from 'react'
import CommentList from '../CommentList/CommentList'

class CommentForm extends Component {
    constructor () {
        super()
        this.state = {
          comments: [
              {
                  user: 'FilmFan123',
                  message: 'Love this!'
              },
              {
                  user: 'EyeLover',
                  message: 'To be or not to be, that is the question. Whether tis nobler in the mind to bear the slings and arrows of outrageous fortune...'
              }
          ]
        }

        this.addComment = this.addComment.bind(this)
      }
    

     addComment = e => {
        e.preventDefault()
        const newComment = { 
                            user: 'Eyes4Life',
                            message: e.target['new-comment'].value
                            }
          this.setState({
                comments: [
                    ...this.state.comments, newComment
                ]
        })
        e.target['new-comment'].value = "";
      }

    render() {
        
          return (
            <div>
                <form className='comment'  onSubmit={this.addComment}>
                    <label>Comment:</label>
                    <textarea type='text' id='new-comment-input' name='new-comment' required></textarea>
                    <div>
                    <button className='comment-submit'>Submit</button> 
                    </div>
                </form>
                <CommentList comments={this.state.comments} />
            </div>
          )
      }
    }

    export default CommentForm