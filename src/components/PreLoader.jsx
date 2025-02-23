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
    transition={{ duration : 2, delay : 3}}
    className={`${loader ? 'fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 w-full h-full z-50 bg-white border-2 border-[#f23a11]' : 'hidden'}`}>

      <motion.div className="w-full flex flex-col justify-center items-center mb-40">
          <p className="w-full text-5xl md:-mt-1.5 lg:text-5xl text-center font-bold font-manrope mb-5">SS.</p>
          <ScaleLoader  size={20} color="#f23a11" className="mr-3 -mt-4"/>
      </motion.div>

    </motion.div>
  )
}

export default PreLoader