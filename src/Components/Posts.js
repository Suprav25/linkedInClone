import React, { Fragment } from 'react'
import '../Styles/posts.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Posts(props) {
    const {description,message,name,timestamp}=props
    return (
        <Fragment>
            <div className="posts-details border-bottom">
                <div className="profile"></div>
                <div className="mx-2">
                    <b>{name}</b>
                    <div><small style={{ color: "gray" }}>{timestamp.toString()}</small></div>
                    <p><small>Description:{description}</small></p>
                    <p>{message}</p>
                </div>
            </div>
            <div className="action-bar mt-2">
                <div className="action-bar-items"><ThumbUpIcon className="mx-1"/>Like</div>
                <div className="action-bar-items"><CommentIcon className="mx-1"/>Comment</div>
                <div className="action-bar-items"><ShareIcon className="mx-1"/>Share</div>
                <div className="action-bar-items"><SendIcon className="mx-1"/>Send</div>
            </div>
        </Fragment>
    )
}

export default Posts
