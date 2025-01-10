import React from 'react';
import './Footer';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram , faFlickr, faSpotify} from '@fortawesome/free-brands-svg-icons';
 

const Footer = () => {
    return (
        <footer
          className="footer text-center text-neutral-600 dark:text-neutral-200 lg:text-left  ">
          <div
            className="flex items-center justify-center border-b-2 p-6 lg:justify-between border-none">
            <div className="mr-12 hidden lg:flex items-center">
                <img
                    src={require("../../assets/icon-fiemg.png")}
                    alt="Icone FIEMG"
                    className="login-image"
                />
                <span>Federação das Indústrias do Estado de Minas Gerais<br/>
                Av. do Contorno, 4456 - Funcionários <br/>
                Belo Horizonte/MG - CEP: 30110-028
                </span>
            </div>
            {/* <!-- Social network icons container --> */}
            <div className="flex justify-center">
              <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>

              <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faFacebook} size='lg' />
              </a>
            
              <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faYoutube} size='lg' />
              </a>
              <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faLinkedin} size='lg' />
              </a>
              <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faInstagram} size='lg' />
              </a>
              <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faFlickr} size='lg' />
              </a>

              <a className="text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faSpotify} size='lg' />
              </a>
            </div>
          </div>
    
    
          {/* <!--Copyright section--> */}
          <div className="p-1 text-center border-none">
          <div className='flex justify-center'>
            <img
                    src={require("../../assets/icon-plan.png")}
                    alt="Icone FIEMG"
                    className="login-image"
                />
            </div>
          </div>
        </footer>
      );
}

export default Footer
