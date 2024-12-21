import Navbar from "../components/Navbar"

const Flora = () => {
  return (
    <div className="bg-[#5F823C] h-screen w-full">
        <div id="navbar" className="fixed bg-[#5F823C] top-0 right-0 left-0 transition-all duration-200 z-50">
            <Navbar />
        </div>
        <div className="pt-20 w-full flex flex-col justify-center items-center">
            <h1 className="text-white gallery text-center text-7xl font-playwrite">FLORA</h1>
        </div>
    </div>
  )
}

export default Flora