import { getChannelDetails } from './../../redux/action/channel.action';
import { Col,Row } from 'react-bootstrap';
import React from 'react'
import numeral from 'numeral'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getVideosByChannel } from './../../redux/action/videos.action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
 import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Videos from "../../components/videos/videos.js";

import './_Channelscreen.scss'

const ChannelScreen = () => {
  
  const dispatch = useDispatch()
  
  const {channelId} = useParams()
  
  useEffect(() => {
     
     dispatch(getVideosByChannel(channelId))
     dispatch(getChannelDetails(channelId))
  }, [dispatch,channelId])

   const { videos, loading } = useSelector(state => state.channelVideos)
   const { snippet, statistics } = useSelector(
      state => state.channelDetails.channel
   )
   return (
        <>
        <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
            <div className='d-flex align-items-center channelHeader__left'>
               <img src={snippet?.thumbnails?.default?.url} alt='' />

               <div className='channelHeader__details'>
                  <h3>{snippet?.title}</h3>
                  <span>
                     {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                     subscribers
                  </span>
               </div>
            </div>

            <button>Subscribe</button>
         </div>

 
         <Container>
           <Row className = 'mt-2'>
              {!loading ? videos?.map(video => (

                 <Col md = {3} lg={3}>
                 <Videos video = {video} channelScreen />
                 </Col>
              ))
               : [...Array(15)].map(()=> (

                  <Col md={3} lg={3}>
                  <SkeletonTheme color='#343a40' highlighColor="#3c4147">
                   <Skeleton width='100%' height='140px'/>
                   </SkeletonTheme>
                   </Col>
               ))
              }
            </Row>
         </Container>
         </>
   )
}
 
export default ChannelScreen
