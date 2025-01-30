import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ScaleLoader} from 'react-spinners';

const PreLoader = ({loader}) => {
    PreLoader.propTypes = {
        loader: PropTypes.any,
      };

  return (
    <motion.div
    initial = {{ y : 0 }}
    animate = {{ y : '-100vh' }}
    transition={{ duration : 2, delay : 2}}
    className={`${loader ? 'fixed flex border-4 border-[#6fb3f2] justify-center items-center top-0 left-0 bottom-0 right-0 w-full h-full z-50 bg-gradient-to-b from-black to-[#14014f]' : 'hidden'}`}>

      <motion.div className="w-full flex flex-col justify-center items-center mb-40">
          <p className="w-full text-6xl md:-mt-1.5 lg:text-5xl text-center font-extrabold mb-5 text-[#6fb3f2]">SS.</p>
          <ScaleLoader  size={20} color="#6fb3f2" className="mr-3"/>
      </motion.div>

    </motion.div>
  )
}

export default PreLoader