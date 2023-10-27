import React from 'react'

const Button = ({ name, classes}: {
    name: string,
    classes?: string,
}) => {
  return (
<button className={`${classes} px-10 py-3 rounded-[60px] text-3xl`}>
    <span>
        {name}
    </span>
</button>
  )
}

export default Button