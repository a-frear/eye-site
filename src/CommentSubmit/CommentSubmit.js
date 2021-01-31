import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const CommentSubmit = (props) => {
    const { isAuthenticated } = useAuth0()
          return (
            isAuthenticated && (
            <div>
                <form className='comment'  onSubmit={e =>props.handleSubmit(e)}> 
                        <label>Comment:</label>
                        <textarea type='text' id='new-comment' name='new-comment' required></textarea>
                        <div>
                        <button className='comment-submit'>Submit</button> 
                        </div>
                    </form>
                </div>
            )
          )
    }

    export default CommentSubmit