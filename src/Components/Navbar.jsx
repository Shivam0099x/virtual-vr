import React from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'
import {useState} from 'react'
import {Menu,X} from 'lucide-react'



function Navbar() {

    const [mobileDrawerOpen, setMoblieDrawerOpen] = useState(false)

    const toggleNavbar = ()=>{
        setMoblieDrawerOpen(!mobileDrawerOpen)
    }


  return (
    
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700'>
          <div className='container relative text-sm mx-auto px-4'>
             <div className='flex justify-between items-center'>
                <div className='flex items-center shrink-0'>
                    <img className="h-10 w-10 m-2" src={logo} alt="logo" />
                    <span className='text-xl tracking-tight'>VirtualIR</span>
                </div>
                <ul className='hidden space-x-12 ml-14 lg:flex'>
                    {
                        navItems.map((items,index)=>(
                            <li key={index}>
                                <a href={items.href}>{items.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden lg:flex justify-center items-center space-x-12'>
                    <a className='px-3 py-2 rounded-md border' href="#">Sign In</a>
                    <a className='px-3 py-2 rounded-md border bg-gradient-to-r from-orange-500 to-orange-800' href="#">Create New Account</a>
                </div>
                <div className='lg:hidden md:flex justify-end flex-col'>
                    <button onClick={toggleNavbar}>
                       {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
             </div>
        
             {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}


          </div>
    </nav>
  )
}

export default Navbar