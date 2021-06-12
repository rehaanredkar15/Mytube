import React ,{useEffect ,useState} from "react";
import "./_videos.scss";
import { AiFillEye } from "react-icons/ai";
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import {LazyLoadImage } from 'react-lazy-load-image-component';


const Videos = ({video}) => {

  const {id,snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{medium}},} = video
 
    
    const [views,setviews ] = useState();
    const [duration,setduration ] = useState();
    const [channelIcon, setchannelIcon] = useState();
     
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')
    
    const _videoId = id?.videoId || id;
    //for categories bar we have id as a object so this was the bug



  //as the response data is not consistent therfore for the duration and views so we need useeffect hook

  useEffect(() => {

    const get_video_details = async() => {

     const {data:{items}}=  await request('/videos',{

        params:{
          part:'contentDetails,statistics',
          id:_videoId,
        }
      })
      setduration(items[0].contentDetails.duration);
      setviews(items[0].statistics.viewCount)
    }
    get_video_details();
  },[_videoId])

 //now we also require useeffect for channel icon

   useEffect(() => {

    const get_channel_icon = async() => {

     const {data:{items}}=  await request('/channels',{

        params:{
          part:'snippet',
          id:channelId,
        }
      })
     setchannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon();
  },[channelId])
  


  return (
    <div className="video">
      <div className="video__top">
        {/* <img
          src={medium.url}
          alt="Thumbnail of video"
        /> */}
        <LazyLoadImage src={medium.url} effect = "blur" />
        <span className = 'video__top__duration'>{_duration}</span>
      </div>

      <div className="video__title">
        {title}
      </div>
      <div className="video__detials">
        <span>
          <AiFillEye className="ans" /> {numeral(views).format("0.a")} Views •   
        </span>
        <span>  {moment(publishedAt).fromNow()}
        </span>
      </div>
      <div className="video__channel">
        
        <LazyLoadImage src={channelIcon?.url} effect = "blur" />
        <p> {channelTitle} </p>
      </div>
    </div>
  );
};

export default Videos;
