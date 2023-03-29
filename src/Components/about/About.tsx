import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {about} from '../../../application.json'
export default function About() {

  return (
    <>
      <h1 className='about-title'>ABOUT US</h1>
      <p className='about-description'>{about.aboutNike}</p>
      <div className="about-card-container">
        <img className="about-image1" src="" alt="" />
        <img className="about-image2" src="" alt="" />
        <img className="about-image3" src="" alt="" />
      </div>
      <h1 className='find-us' >FOLLOW US NOW HERE FOR ANY UPDATES</h1>
      <div className="social-media">
        <p><InstagramIcon />&nbsp;&nbsp; INSTA</p>
        <p><FacebookIcon />&nbsp;&nbsp; FACEBOOK</p>
        <p><TwitterIcon />&nbsp;&nbsp; TWITTER</p>
      </div>
      <p className='coyright' >Copyright © 2023 fit for life. All rights reserved.</p>
    </>
  )
}