import React from "react"
import { NavbarMenu } from "../../mockData/data"
import { FaDumbbell } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { PiShoppingCartThin } from 'react-icons/pi'
import ResponsiveMenu from "./ResponsiveMenu"
const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* LOGO SECTION */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell/>
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* MENU SECTION */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {
                NavbarMenu.map((item) => {
                  return(
                    <li key={item.id}><a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold duration-200">{item.title}</a></li>
                  )
                })
              }
            </ul>
          </div>
          {/* iCON SECTION */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch/>
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin/>
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">Login</button>
          </div>
          {/* MOBILE HAMBURGER MENU SECTION */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl"/>
          </div>
        </div>
      </nav>
      {/* MOBILE SIDEBAR SECTION */}
      <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar
