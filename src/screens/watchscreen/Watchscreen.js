import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import React from 'react'
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal.js";
import Comments from "../../components/comments/comments.js";
import VideoMetadata from "../../components/videoMetaData/VideoMetadata.js";
const Watchscreen = () => {
    return (
        <Row>
              <Col >
            <div className='watchScreen__player mt-2'>
               <iframe
                  src='https://www.youtube.com/embed/tgbNymZ7vqY'
                  frameBorder='0'
                  title='MY VIDEO'
                  allowFullScreen
                  width='100%'
                  height='500vh'
                  ></iframe>
            </div>

            <VideoMetadata />
            <Comments />
         </Col> 
             <Col lg = {4}> 
             { 
              [...Array(20)].map(() =>(
                   
                    <VideoHorizontal/>
               ))}
              
             </Col>
             
        </Row>
    )
}

export default Watchscreen
