import React from 'react'
import './_comments.scss'
import moment from 'moment'
const Comments = () => {
   return (
      <div className='comment p-2 d-flex'>
         <img
            src='https://www.seekpng.com/png/full/356-3562377_personal-user.png'
            alt=''
            className='rounded-circle mr-3'
         />
         <div className='comment__body'>
            <p className='comment__header mb-1 '>
                Rehaan Redkar • {moment('2020-05-05').fromNow()}
            </p>
            <p className='mb-0'>OP in the chat guys !!!</p>
         </div>
      </div>
   )
}

export default Comments