import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function About() {

  return (
    <>
      <h1 className='about-title'>ABOUT US</h1>
      <p className='about-description'>Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services.

        The company’s world headquarters are situated near Beaverton, Oregon, in the Portland metropolitan area (USA). It is a major producer of sports equipment and one of the world’s largest suppliers of athletic shoes and apparel.

        It employs more than 44,000 people worldwide and in 2014 the brand alone was valued as $19 billion (€17,5 billion), making it the most valuable brand between sports businesses.Founded by Bill Bowerman and Phil Knight on January 25 1964, as Blue Ribbon Sports, the company became officially Nike, Inc. on May 30 1971. The company was named after the Greek goddess of victory, Nike (Νίκη).</p>
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