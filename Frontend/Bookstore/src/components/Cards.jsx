import React from 'react'

function Cards({item}) {
    console.log("itemssss:",item)
  return (
   <>
   <div className='mt-4 my-4 p-3 '>
   <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src= {item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-name">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">Rs{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-lg border:white-900 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards