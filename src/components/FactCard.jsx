import React from 'react'

const FactCard = ({ heading, fontcolor, bgColor, description, top, left }) => {
  return (
    <div className={`absolute min-w-[20vw] h-auto flex place-content-start justify-start items-start flex-col gap-2 p-2 ${bgColor}`}
    style={{ top: `${top}vh`, left: `${left}vw` }}>
        <h2 className={`${fontcolor}`}>{heading}</h2>
        <p className={`${fontcolor} font-normal text-2xl flex border-2 items-start`}>{description}</p>
    </div>
  )
}

export default FactCard