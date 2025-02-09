import { Facebook, InstagramIcon, LinkedinIcon, Mail, TwitchIcon, TwitterIcon, VerifiedIcon } from 'lucide-react'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <div className="wrapper">
        <motion.span 
        initial={{ opacity:0, scale:0.5}}
        animate={{ opacity:1, scale:1}}
        transition={{duration:0.5}}
        className='logo-wrapper'>
            <h2>EmessCodes </h2>
            <VerifiedIcon className='v-i'/>
        </motion.span>
        <div className="socials">
            <a href=""> <Facebook/></a>
            <a href=""> <TwitterIcon/></a>
            <a href=""> <LinkedinIcon/></a>
            <a href=""> <InstagramIcon/></a>
            <a href=""> <Mail/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
