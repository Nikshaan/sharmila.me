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
    animate = {{ y : '-200vh' }}
    transition={{ duration : 4, delay : 2}}
    className={`${loader ? 'fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 w-full h-full z-50 bg-[#f5fafc] border-2 border-[#0f1b61]' : 'hidden'}`}>

      <motion.div className="w-full flex flex-col justify-center items-center mb-40">
          <p className="w-full text-5xl md:-mt-1.5 lg:text-5xl text-center font-domine mb-5 text-[#0f1b61]">SS.</p>
          <ScaleLoader  size={20} color="#0f1b61" className="mr-3 -mt-4"/>
      </motion.div>

    </motion.div>
  )
}

export default PreLoader