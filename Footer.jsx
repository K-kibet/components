import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer theme'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <a href='#' title='facebook'><Facebook /></a>
                    <a href='#' title='instagram'><Instagram /></a>
                    <a href='#' title='twitter'><Twitter /></a>
                    <a href='#' title='youtube'><YouTube /></a>
                    <a href='#' title='linkedin'><LinkedIn /></a>
                    <a href='#' title='pinterest'><Pinterest /></a>
                </div >
                
            </div>

            <div className='section-wrapper theme'>
                <section>
                    <h2>Resources</h2>
                    <div className='items-container theme'>
                        <a href='#' title='contact us'>Contact us</a>
                        <a href='#' title='blogs'>Blogs</a>
                        <a href='#' title='help'>Help center</a>
                        <a href='#' title='services'>our services</a>
                        <a href='#' title='store'>Store</a>
                    </div>
                </section>

                <section>
                    <h2>Featured</h2>
                    <div className='items-container theme'>
                        <a>Bigplay</a>
                        <a>Coongames</a>
                        <a>Bigshare</a>
                        <a>Photomore</a>
                        <a>Workfit</a>
                    </div>
                </section>

                <section>
                    <h2>Developers</h2>
                    <div className='items-container theme'>
                        <a>Codespear</a>
                        <a>Dev Editor</a>
                        <a>Contribute</a>
                    </div>
                </section>
            </div>

            <hr />

            <div className='footer-bottom theme'>
                <p>&copy; Bigbutton 2022</p>
                <a>Privacy & cookies</a>
                <a>Terms of use</a>
                <a> Help</a>
            </div>
        </div>
    );
}

export default Footer;
