import React, { useState } from 'react'



const Toggle = () => {
  const[isToggled,setIsToggled]=useState(false);
  const onToggle = () =>setIsToggled(!isToggled);
    return (
    <div>
      <label className='toggle-switch'>
         <input type="checkbox"  checked={isToggled} onChange={onToggle}/>
         <span className='switch'/>
      </label>
    </div>
  )
}

export default Toggle

