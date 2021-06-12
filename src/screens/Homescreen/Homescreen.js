import { useSelector } from 'react-redux';
import { getPopularVideos,getVideosByCategory } from './../../redux/action/videos.action';
import { useDispatch } from 'react-redux';
import React ,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/videos/videos";
import Categories from "../../components/Categories/categories";
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton';
import { SkeletonVideo } from "../../components/skeletons/skeletons.js";

const HomeScreen = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])

   const { videos, activeCategory, loading } = useSelector(
      state => state.homeVideos
   )

   const fetchData = () => {
      if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }
   }

   return (
      <Container>
         <Categories/>

         <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
             loader={


               [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                       <SkeletonVideo />
                    </Col>
                 ))}
            //    <div className='spinner-border text-danger d-block mx-auto'></div>
            // }
            className='row'>
            {!loading
               ? videos.map(video => (
                    <Col lg={3} md={4}>
                       <Video video={video} key={video.id} />
                    </Col>
                 ))
               : console.log('con') }
         </InfiniteScroll>
      </Container>
   )
}

export default HomeScreen