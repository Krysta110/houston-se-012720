import React, { Fragment } from 'react'

const MoneyForm = (props) => {
  return (<div>
      <form onSubmit={(e) => props.addMoney(e)}>
          <input type="text" placeholder="Add $"/>
          <input type="submit" value="Add Money"/>
      </form>
  </div>)
}

export default MoneyForm