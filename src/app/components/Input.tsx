import React from 'react'

const Input = ({type, label}: {
    type: string;
    label: string;
}) => {
  return (
    <input type={type} placeholder={label} className="w-[400px] border-b-4 border-azul-escuro placeholder:text-grey placeholder:capitalize placeholder:text-2xl bg-transparent outline-none"/>
  )
}

export default Input