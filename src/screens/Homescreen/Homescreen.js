import { useSelector } from 'react-redux';
import { getPopularVideos } from './../../redux/action/videos.action';
import { useDispatch } from 'react-redux';
import React ,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/videos/videos";
import Categories from "../../components/Categories/categories";
import InfiniteScroll from 'react-infinite-scroll-component';




const Homescreen = () => {
   
   const dispatch = useDispatch()

   useEffect(() =>{

       dispatch(getPopularVideos())
   },[dispatch])

  const {videos,activeCategory} = useSelector(state => state.homeVideos)

  const fetchData  = () => {
    
      if(activeCategory === 'All')
       dispatch(getPopularVideos());
       else{

         dispatch(getPopularVideos(activeCategory))
       }
  }



  return (
    <>
      <Container>
        <Categories />
        <Row>
         <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
          { !loading ? (
           videos.map((video) => (
            <Col lg={3} md={4}>
              <Video video={video} key ={video.id}/>
            </Col>
           ))
           ): (
             //dummy loading aray for skeletons 
             [...Array(20)].map(() => <Skeleton height={100} width="100%"/>)
             <Skeleton/>
          )}
        </InfiniteScroll>
        </Row>
      </Container>
    </>
  );
};

export default Homescreen;
