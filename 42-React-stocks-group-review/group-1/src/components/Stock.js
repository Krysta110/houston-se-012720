import React from 'react'

const Stock = (props) => {
// console.log(props.stock.name)
  return(
  <div 
  onClick={() => props.addStock ? props.addStock(props.stock) : props.sellStock(props.stock)}> 
  {/* {user cannot click if component is rendered by portfolio container} */}
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
           props.stock.price
          }</p>
      </div>
    </div>


  </div>)
}

export default Stock
