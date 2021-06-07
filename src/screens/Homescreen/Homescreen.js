import { useSelector } from 'react-redux';
import { getPopularVideos } from './../../redux/action/videos.action';
import { useDispatch } from 'react-redux';
import React ,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/videos/videos";
import Categories from "../../components/Categories/categories";

const Homescreen = () => {
   
   const dispatch = useDispatch()

   useEffect(() =>{

       dispatch(getPopularVideos())
   },[dispatch])

  const {videos,} = useSelector(state => state.homeVideos)




  return (
    <>
      <Container>
        <Categories />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <Video video={video} key ={video.id}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Homescreen;
