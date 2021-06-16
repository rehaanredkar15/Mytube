import React from 'react'; 
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector } from 'react-redux';
import { getSubscribedchannels } from './../../redux/action/videos.action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal';
import "./_Subscriptionscreen.scss";

const Subscriptionscreen = () => {
     
     const {query} = useParams()
    const dispatch = useDispatch()

    const {loading,videos} = useSelector(state => state.subscriptionChannel)
   
   
    useEffect(() => {
       
         dispatch(getSubscribedchannels(query))
    }, [query,dispatch])
    return (
        <Container fluid>
         {!loading ? (
            videos?.map(video => (
               <VideoHorizontal video={video} key={video.id} subScreen />
            ))
         ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme> 
         )}
      </Container>
    )
}

export default Subscriptionscreen
