import React, {Component } from 'react'
import CommentList from '../CommentList/CommentList'
import config from '../config'

class CommentForm extends Component {
    constructor () {
        super()
        this.state = {
          comments: [],
          error: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
      }

      setComments = comments => {
        this.setState({ 
          comments,
          error: null,
         })
      }

      componentDidMount(){  
        fetch(config.API_ENDPOINT_comments, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
          }
        })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(this.setComments)
        .catch(error => this.setState({ error }))
      }

      addComment = comment => {
        this.setState({
          comments: [
            ...this.state.comments,
            comment
          ]
        })
      };
    

     handleSubmit = e => {
        e.preventDefault()
        const newComment = {
          modified: new Date(),
          user_id: 1,
          video_id: this.props.vidId,
          content: e.target['new-comment'].value,
        }
        fetch(config.API_ENDPOINT_comments, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newComment),
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(comment => {
            this.addComment(comment)
          })
          .catch(error => {
            console.error({ error })
          })
      }

    render() {
          
          return (
            <div>
                <form className='comment'  onSubmit={this.handleSubmit}>
                    <label>Comment:</label>
                    <textarea type='text' id='new-comment' name='new-comment' required></textarea>
                    <div>
                    <button className='comment-submit'>Submit</button> 
                    </div>
                </form>
                <CommentList comments={this.state.comments} vidId={this.props.vidId} />
            </div>
          )
      }
    }

    export default CommentForm