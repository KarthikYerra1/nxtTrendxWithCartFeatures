import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      let totalValue = 0
      cartList.forEach(each => {
        totalValue += each.quantity * each.price
      })

      return (
        <div className="cart-list-summary-container">
          <h1 className="cart-summary-order-heading">
            Order Total:
            <span className="cart-summary-total-value">
              {' '}
              Rs {totalValue}/-{' '}
            </span>
          </h1>
          <p className="cart-summary-total-items">{cartLength} Items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
