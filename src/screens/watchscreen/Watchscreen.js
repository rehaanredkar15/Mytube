import { useSelector } from 'react-redux';
import { getVideosById, getRelatedVideos } from './../../redux/action/videos.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import React from 'react'
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal.js";
import Comments from "../../components/Comments/Comments.js";
import VideoMetadata from "../../components/videoMetaData/VideoMetadata.js";
import {useParams } from 'react-router-dom';

const Watchscreen = () => {

  // use params for handling the id from the requestionn video
    const {id} = useParams();

    const dispatch = useDispatch();
   

    
    useEffect(() => {

        dispatch(getVideosById(id))
        dispatch(getRelatedVideos(id))
    },[dispatch,id])

    const {videos,loading:relatedVideosLoading} = useSelector(state => state.relatedVideos)
   const {video,loading} = useSelector(state => state.selectedVideo)
    return (
        <Row>
              <Col >
            <div className='watchScreen__player mt-2'>
               <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  frameBorder='0'
                  title={video?.snippet?.title}
                  allowFullScreen
                  width='850px'
                  height='500vh'
                  ></iframe>
            </div>
           {!loading ? 
           <VideoMetadata  video={video} videoId={id} />:
            <h6>Loading.... </h6>
            
           }
            <Comments videoId={id}  totalComments={video?.statistics?.commentCount}/>
         </Col> 
             <Col lg = {4}> 
             { !loading && videos?.filter(video=>video.snippet).map(() =>(
                   
                    <VideoHorizontal video={video} key={video.id.videoId}/>
               ))}
              
             </Col>
             
        </Row>
    )
}

export default Watchscreen
