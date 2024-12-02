


import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-slate-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-5xl">LUXARIES</a>
    </div>
    <div className="flex-none gap-2">
     
     
     <ul className='flex gap-10'> 
        
     <li><button className='btn btn-secondary'>HOME</button></li>

        
        
              <li><button className='btn btn-secondary'>Login</button></li>
           
          

              <li ><button className='btn btn-secondary'><div className='flex '>
         <img className='w-10 rounded-full'
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> <p className='mt-2'>User Profile</p> 
            </div> </button> </li>
     </ul>
      
       
        
       
      
    </div>
  </div>

  )
}


export default Navbar