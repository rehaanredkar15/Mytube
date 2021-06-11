import { getVideosByCategory, getPopularVideos } from './../../redux/action/videos.action';
import { useDispatch } from 'react-redux';
import React, { useState } from "react";
import "./_categories.scss";

const keywords = [
  "All",
  "Live",
  "Mixes",
  "Music",
  "PUBG",
  "Javascript",
  "Cricket",
  "Python",
  "Science Fiction",
  "Comedies",
  "Superheroes",
  "Web series",
  "Dr DisRespect",
  "Film criticisms",
  "Bitcoin",
  "Thrillers",
  "Courses",
];

const Categories = () => {
  //Keys help React identify which items have changed, are added,
  // or are removed. Keys should be given
  //to the elements inside the array to give the elements a stable identity

  const [activestate, setactivestate] = useState("All");
  const dispatch = useDispatch()



  const handleclick = (value) => {
    setactivestate(value);
    if(value==='All'){

        dispatch(getPopularVideos())
    }
    else{
      

    dispatch(getVideosByCategory(value))
    }
  };
  return (
    <div className="Categories">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleclick(value)}
          key={i}
          className={activestate === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories;
