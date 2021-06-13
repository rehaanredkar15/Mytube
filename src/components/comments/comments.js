import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
 import { useState } from 'react';
import { getCommentsOfVideoById } from './../../redux/action/comments.action';
import moment from 'moment'
import {addComment  } from './../../redux/action/comments.action';
import './_comments.scss';
const Comments = ({ comment }) => {
 

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
   }



   return (
      <div className='comment p-2 d-flex'>
         <img
            src={authorProfileImageUrl}
            alt=''
            className='mr-3 rounded-circle'
         />
         <div className='comment__body'>
            <p className='mb-1 comment__header'>
               {authorDisplayName} • {moment(publishedAt).fromNow()}
            </p>
            <p className='mb-0'>{textDisplay}</p>
         </div>
      </div>
   )
}

export default Comments
