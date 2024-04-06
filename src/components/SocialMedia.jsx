import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a  href='https://twitter.com/AlokVer57147764' target="_blank" rel="noreferrer">
            <BsTwitter /></a>
        </div>
        <div>
          <a href='https://linkedin.com/in/alok-verma-20s' target="_blank" rel="noreferrer">
            <BsLinkedin /></a>
        </div>
        <div>
          <a href="https://github.com/alokverma20s/" target="_blank" rel="noreferrer">
            <BsGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia