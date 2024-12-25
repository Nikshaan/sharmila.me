import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { PropagateLoader} from 'react-spinners';

const PreLoader = ({loader}) => {
    PreLoader.propTypes = {
        loader: PropTypes.any,
      };

  return (
    <motion.div
    initial = {{ y : 0 }}
    animate = {{ y : '-100vh' }}
    transition={{ duration : 2, delay : 3}}
    className={`${loader ? 'fixed flex border-4 border-[#8a733e] justify-center items-center top-0 left-0 bottom-0 right-0 w-full h-full z-50 bg-[#fff5de]' : 'hidden'}`}>

      <motion.div className="w-full flex flex-col justify-center items-center mb-40">
          <p className="w-full text-6xl md:-mt-1.5 lg:text-5xl font-almendra text-center font-extrabold text-[#8a733e] mb-5">SS.</p>
          <PropagateLoader  size={20} color="#8a733e" className="mr-9"/>
      </motion.div>

    </motion.div>
  )
}

export default PreLoader