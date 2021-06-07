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


  return (
    <>
      <Container>
        <Categories />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Homescreen;
