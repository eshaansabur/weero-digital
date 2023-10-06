import React from 'react';
//import icons
import {ImFacebook, ImInstagram, ImTwitter, ImYoutube} from 'react-icons/im';
import { Link } from 'react-router-dom';
const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4 text-secondary'>
      <li><a href='https://www.facebook.com/'><ImFacebook></ImFacebook></a></li>
      <li><a href='https://www.instagram.com/' target='_blank'><ImInstagram></ImInstagram></a></li>
      <li><a href='https://www.twitter.com/' target='_blank'><ImTwitter></ImTwitter></a></li>
      <li><a href='https://www.youtube.com/' target='_blank'><ImYoutube></ImYoutube></a></li>
    </ul>
  </div>;
};

export default Socials;
