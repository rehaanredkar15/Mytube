import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React,{useState} from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

//handletoggle was the function passed as props
const Header = ({ handleToggle }) => {

  const [input,setInput] = useState('');

  const history = useHistory();
  let search = null;

  const handleSubmit= (e) =>{

      
  
      e.preventDefault();
      if(!search)
      {
      history.push(`search/${input}`)
      }
      else
      {
        history.push(`/${input}`)
      }
      search++;
  }
  return (
    <div className=" header">
      <FaBars  
        className="header__menu"
        size={26}
        onClick={() => handleToggle()}
      />
      <Link to ='/'>
      <img
        src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
        alt="Mytube logo"
        
        className="header__logo"
      />{" "}
      </Link>
      <form onSubmit={handleSubmit}>
         <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons ">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
