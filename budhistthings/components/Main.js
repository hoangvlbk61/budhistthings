import React from "react";

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import Image from "next/image";

const Main = (props) => {
  let close = <div className="close" onClick={() => { props.onCloseArticle() }}></div>

  return (
    <div id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>

      <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div className="dialog-wrapper">
          <h2 className="major">Intro</h2>
          <span className="image main"><Image src="/images/pic01.jpg" alt="" width={100} height={100} /></span>
          <div className="dialog-intro">
            <p>
              This is a startup project of the youngs admiring Buddhism. Our goal is to propagate Buddhism. Part of profit earned here is for charity.
            </p>
          </div>
          {close}
        </div>
      </article>

      <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div>
          <div className="dialog-fix">
            <h2 className="major">Work</h2>
            <span className="image main"><Image src="/images/pic02.jpg" alt="" width={100} height={100} /></span>
          </div>
          <div className="dialog-intro">
            <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          </div>
          {close}
        </div>
      </article>

      <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div>
          <h2 className="major">About</h2>
          <span className="image main"><Image src="/images/pic03.jpg" alt="" width={100} height={100} /></span>
          <div className="dialog-intro">
            <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
            {close}
          </div>
        </div>
      </article>

      <article id="contact" className={`dialog-intro ${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        <ul className="icons">
          <li><a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a></li>
          <li><a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a></li>
          <li><a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a></li>
          <li><a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a></li>
        </ul>
        {close}
      </article>

    </div>
  )
}
Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main