import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosBySearch } from './../redux/action/videos.action';
import { useParams } from 'react-router-dom';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal'

const Searchscreen = () => {


    const {query} = useParams()
    console.log(query)
    const dispatch = useDispatch();

    useEffect(() =>{

        dispatch(getVideosBySearch(query))
    },[query])

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
                    <h1>loading....</h1>
                )
             }
        </Container>
    )
}

export default Searchscreen
