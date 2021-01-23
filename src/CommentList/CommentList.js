import React, {Component } from 'react'
import './CommentList.css'

class CommentList extends Component {

    render() {
        const comments = this.props.comments
          return (
              <div>
                <ul className='comment-list'>
                    {comments.map(comment => 
                        <li className='comment-list-item'>
                            <h3 className='user'>{comment.user}:</h3>
                            <p className='message'>{comment.message}</p>
                        </li>
                    )}
                </ul>
              </div>
              

          )
      }
    }

    export default CommentList