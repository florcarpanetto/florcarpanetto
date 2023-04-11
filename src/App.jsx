
import { motion } from 'framer-motion';
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
      <motion.img
        src={backgroungImage}
        alt='imagen logo fondo'
        className='background-image'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3 }}

      />
      <header>
        <div className='header-container'>


          <motion.img
            src={logo}
            alt='Logo color'
            className='logo'
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 270, 270, 0]
            }}
          />
          <motion.img
            src={isoLogo}
            alt='Flor Carpanetto'
            className='isologo'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          <div className='contactContainer'>
            <motion.a
              href='https://wa.me/543516618383'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img src={whatsappLogo} className='logoSocialMedia' alt='logo' />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/florcarpanetto'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img src={liknedinLogo} className='logoSocialMedia' alt='logo' />
            </motion.a>
            <motion.a
              href='https://github.com/florcarpanetto'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img src={githubLogo} className='logoSocialMedia' alt='logo' />
            </motion.a>
            <motion.a
              href='mailto:florcarpanetto@gmail.com'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img src={mailtoLogo} className='logoSocialMedia' alt='logo' />
            </motion.a>
          </div>
        </div>

      </header>


      <section>
        <div className='webs-container'>
          <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          >
            WEB DEVELOPMENT
          </motion.h2>
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
