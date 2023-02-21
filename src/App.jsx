
import backgroungImage from './assets/Grayscale_LOGO 1280x1024_72dpi.png';
import isoLogo from './assets/isologo.png';
import logo from './assets/logo-color.png';
import hotelScreen from './assets/screenshot_hotels.jpeg';
import podcastScreen from './assets/screenshot_podcast.jpeg';
import tecnoScreen from './assets/tecnoScreen.png';
import whatsappLogo from './assets/whatsapp.png';
import githubLogo from './assets/github.png';
import mailtoLogo from './assets/mailto.png';
import liknedinLogo from './assets/linkedin.png';

import './App.css'
import { WebCard } from './components/webCard/WebCard';

function App() {


  return (
    <>
      <img src={backgroungImage} alt='imagen logo fondo' className='background-image' />
      <header>
        <div className='header-container'>


          <img src={logo} alt='Logo color' className='logo' />
          <img src={isoLogo} alt='Flor Carpanetto' className='isologo' />

        <div className='contactContainer'>
          <a href='https://wa.me/543516618383' target='_blank'><img src={whatsappLogo} className='logoSocialMedia' alt='logo' /></a>
          <a href='https://www.linkedin.com/in/florcarpanetto' target='_blank'><img src={liknedinLogo} className='logoSocialMedia' alt='logo' /></a>
          <a href='https://github.com/florcarpanetto' target='_blank'><img src={githubLogo} className='logoSocialMedia' alt='logo' /></a>
          <a href='mailto:florcarpanetto@gmail.com' target='_blank'><img src={mailtoLogo} className='logoSocialMedia' alt='logo' /></a>
        </div>
        </div>

      </header>


      <section>
        <div className='webs-container'>
          <h2>WEB DEVELOPMENT</h2>
          <WebCard link='http://astillerotecno.com.ar/' image={tecnoScreen} titlte='Shipyard: Tecno' />
          {/* <WebCard link='https://funny-gnome-218ccb.netlify.app/' image={hotelScreen} titlte='Giphos app' /> */}
          <WebCard link='https://funny-gnome-218ccb.netlify.app/' image={hotelScreen} titlte='Hotels Reservation' />
          <WebCard link='https://serene-bardeen-b81176.netlify.app/' image={podcastScreen} titlte='Podcast page' />

        </div>
      </section>
    </>
  )
}

export default App
