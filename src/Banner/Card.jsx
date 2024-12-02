

import React from 'react'
import dataProperty from '../assets/fakeData.json'

const Card = () => {



  return (
    <div className='grid grid-cols-2'>

        {
            dataProperty.map((res)=>
                (
              
                <div key={res.id}  className="card bg-base-100 w-[600px] mt-8 shadow-xl">
                    <figure>
                      <img
                        src={res.image}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{res.estate_title}</h2>

                      <h2 className="">{res.price}</h2>
                      <p>{res.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">More Details</button>
                      </div>
                    </div>
                  
                  </div>)
        )
        }



    </div>
  )
}




export default Card