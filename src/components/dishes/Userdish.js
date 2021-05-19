import React from 'react'

const Userdish = ({dish}) => {
  const {name, protein, fat, carb} = dish;
  const cal = 4*protein + 9*fat + 4*carb;
  return (
    <tr>
      <td>{name}</td>
      <td>{protein}</td>
      <td>{fat}</td>
      <td>{carb}</td>
      <td>{cal}</td>
    </tr>
  )
}


export default Userdish
