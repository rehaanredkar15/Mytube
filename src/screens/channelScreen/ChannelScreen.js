import { getVideosByChannel } from './../../redux/action/videos.action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react'
 
const ChannelScreen = () => {
  
  const dispatch = useDispatch()
  
  const {channelId} = useParams()
  
  useEffect(() => {
     
     dispatch(getVideosByChannel(channelId))
  }, [dispatch,channelId])

   return (
      <div>
         ChannelScreen
      </div>
   )
}
 
export default ChannelScreen
