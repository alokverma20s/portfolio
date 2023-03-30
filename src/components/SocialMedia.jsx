import React from 'react'
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a  href='https://twitter.com/AlokVer57147764' target="_blank" rel="noreferrer">
            <BsTwitter /></a>
        </div>
        <div>
          <a href='https://www.facebook.com/alokverma12011991' target="_blank" rel="noreferrer">
            <FaFacebookF /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/alokverma_20s/" target="_blank" rel="noreferrer">
            <BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia