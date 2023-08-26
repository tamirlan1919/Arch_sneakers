import React from 'react'
import AppContext from '../contex'

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext)

  return (
    <div className="cartEmty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButtonBack">
        <img src="img/arrow-back.svg" alt="Arrow" />
        Come back
      </button>
    </div>
  )
}

export default Info
