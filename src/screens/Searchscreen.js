import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosBySearch } from './../redux/action/videos.action';
import { useParams } from 'react-router-dom';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

//okay so basically how youtube decides the search done is  for that youtube has kind property
const Searchscreen = () => {


    const {query} = useParams()
    const dispatch = useDispatch();

    useEffect(() =>{

        dispatch(getVideosBySearch(query))
    },[query,dispatch])

    const  {videos,loading} = useSelector(state=> state.searchedVideos)
    return (
        <Container>
             {
                !loading ? (
               videos?.map(video => (
               <VideoHorizontal
                  video={video}
                  key={video.id.videoId}
                  searchScreen
               />
            ))):
                (
                     <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
                )
             }
        </Container>
    )
}

export default Searchscreen
