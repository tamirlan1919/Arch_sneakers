import React from 'react'
import Card from '../components/Card/Card'
import axios from 'axios'
import AppContext from '../contex'

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    async function ordersData() {
      try {
        const { data } = await axios.get(
          'https://64ddf2d1825d19d9bfb1c4c7.mockapi.io/orders'
        )
        setOrders(data.map((obj) => obj.items).flat())
        setIsLoading(false)
      } catch (error) {
        alert('Something get wrong!')
      }
    }
    ordersData()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card
            key={index}
            // added={isItemAdded(item && item.id)} // some вернет true/false
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Orders
