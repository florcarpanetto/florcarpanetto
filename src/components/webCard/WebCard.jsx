import { motion } from 'framer-motion';
import './WebCard.css';
import dragIcon from '../../assets/drag-4.svg'

export const WebCard = ({ titlte, image, link }) => {
  return (


    <motion.div
      className='card-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 3 }}
      drag
      dragConstraints={{
        top: -170,
        left: -170,
        right: 170,
        bottom: 170,
      }}
    >
      <h3>{titlte}</h3>
      <motion.a href={link}>
        <motion.img src={image} alt='web screen' className='screenshot' />
      </motion.a>
      <div className='card-bottom'>
        <img className='card-bottom-image' src={dragIcon} />

        {'drag me'}
      </div>
    </motion.div>
  )
}
