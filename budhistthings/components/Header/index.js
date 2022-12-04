import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import { faOm } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';



const Header = props => {
    return (
        <header id="header" style={props.timeout ? { display: 'none' } : {}}>
            <div className="logo"  >
                {/*<span className="icon fa-diamond"></span>*/}
                <FontAwesomeIcon icon={faOm} size="3x" />
            </div>
            <div className="content">
                <div className="inner">
                    <h1>Thanh Hoa</h1>
                    <p>Budhism and Beyond</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a className='cursor-pointer' onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                    {/* <li><a className='cursor-pointer' onClick={() => { props.onOpenArticle('work') }}>Blog</a></li> */}
                    <li><Link href={"/blog"}>Blog</Link></li>
                    <li><Link href={"/shop"}>Shop</Link></li>
                    <li><a className='cursor-pointer' onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;