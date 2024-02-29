import Image from "next/image"
import {  AchorLink } from "../links/links"



const NavBar = () => {
  return (
    <div className="flex justify-between p-8 bg-blue-200 text-white w-full">
        {/* Logo */}
        <div>
            <h1 className="text-2xl font-bold">Iboytech</h1>
        </div>

        {/* Links Container */}
      <div>
        < AchorLink />                    
      </div>
    </div>
  )
}

export default NavBar
