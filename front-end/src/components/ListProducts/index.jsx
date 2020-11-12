import React from 'react'
import CardProduct from './CardProduct';

function ListProducts({ list }) {
  return (
    <div>
      {list.map((info) => <CardProduct info={info} />)}
    </div>
  )
}

export default ListProducts
