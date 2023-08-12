import CTA from './CTA'
import '../styles/order.scss'

function OrderNow() {
  return (
    <div className='Order'>
        <h2 className='Order--header'>Order Now</h2>
        <CTA />
    </div>
  )
}

export default OrderNow