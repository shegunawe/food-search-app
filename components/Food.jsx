import React from 'react'

const Food = ({src, label, category}) => {
  return (
    <div className="p-5">
      <img src={src} alt="food pic" className=" rounded-3xl" />
      <p>
        <span className="font-bold">Name: </span>
        <span className="text-sm">{label}</span>
      </p>
      <p>
        <span className="font-bold">Category: </span>
        <span className="text-sm">{category}</span>
      </p>
    </div>
  );
}

export default Food
