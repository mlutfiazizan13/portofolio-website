import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component, Fragment} from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='px-10 py-10 text-sm bg-[#323443]'>
                    <div className='flex justify-center'>
                        <div className=''>
                                <p className='bg-[#272727] px-5 py-3 text-white rounded-lg font-bold text-lg mb-5 text-center'>Let's get in touch</p>
                                <div className=''>
                                    <div className='flex gap-4 text-white items-center mb-3'>
                                        <FontAwesomeIcon className='h-7 w-7' icon={faEnvelope} />
                                        <p className='text-xl'>mlutfiazizan@gmail.com</p>
                                    </div>
                                    <div className='flex gap-4 text-white items-center'>
                                        <FontAwesomeIcon className='h-7 w-7' icon={faPhone} />
                                        <p className='text-xl'>+62 895-2924-8087</p>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-7 mt-10'>
                                    <a href="https://www.instagram.com/lutf_azn/" target='_blank' rel='noreferrer'><FontAwesomeIcon className='text-white w-5 h-5' icon={faInstagram} /></a>
                                    <FontAwesomeIcon className='text-white w-5 h-5' icon={faLinkedin} />
                                    <a href="https://github.com/mlutfiazizan13" target='_blank' rel='noreferrer'><FontAwesomeIcon className='text-white w-5 h-5' icon={faGithub} /></a>
                                    <FontAwesomeIcon className='text-white w-5 h-5' icon={faDiscord} />
                                    
                                </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 bg-[#212121] text-center text-white lg:text-sm text-xs'>
                Copyright ©2023
                </div>
            </Fragment>
        );
    }
}
 
export default Footer;