import { useState } from 'react';
import { getCommentsOfVideoById } from './../../redux/action/comments.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import React from 'react'
import './_comments.scss'
import  Comment from "../Comment/Comment.js";
import moment from 'moment'




const Comments = ({ videoId, totalComments }) => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCommentsOfVideoById(videoId))
   }, [videoId, dispatch])

   const comments = useSelector(state => state.commentList.comments)

   const [text, setText] = useState('')

   const _comments = comments?.map(
      comment => comment.snippet.topLevelComment.snippet
   )

   const handleComment = e => {
      e.preventDefault()
      if (text.length === 0) return

      dispatch(addComment(videoId, text))

      setText('')
   }
   return (
      <div className='comments'>
         <p>{totalComments} Comments</p>
         <div className='my-2 comments__form d-flex w-100'>
            <img
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               alt=''
               className='mr-3 rounded-circle'
            />
            <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  className='flex-grow-1'
                  placeholder='Write a comment...'
                  value={text}
                  onChange={e => setText(e.target.value)}
               />
               <button className='p-2 border-0'>Comment</button>
            </form>
         </div>
         <div className='comments__list'>
            {_comments?.map((comment, i) => (
               <Comment comment={comment} key={i} />
            ))}
         </div>
      </div>
   )
}

export default Comments