import { getSubscribedchannels } from './../../redux/action/videos.action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import "./_Subscriptionscreen.scss";

const Subscriptionscreen = () => {
     
     const {query} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
       
         dispatch(getSubscribedchannels(query))
    }, [query,dispatch])
    return (
        <div>
            
        </div>
    )
}

export default Subscriptionscreen
