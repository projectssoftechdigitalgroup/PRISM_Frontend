import React, { useState } from 'react'
import CategoryCard from './CategoryCards'
import { FaHistory } from 'react-icons/fa'
import RHistory from './RHistory'


const Recommendations = () => {
const [screen, setScreen] = useState(true)
    return (
    screen ?
        <>
    <CategoryCard/>
    <div className="fixed inset-0 flex items-center justify-center  z-50 cursor-pointer">
    <button onClick={()=>setScreen(false)} className="fixed cursor-pointer bottom-6 md:ms-[5%] left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 z-50 flex items-center justify-center gap-2 text-sm sm:text-base ">
  <FaHistory className="text-base sm:text-lg"/>
  Recommendations History
</button>



</div>


    </>
:<RHistory/>
  
    )
    }

export default Recommendations