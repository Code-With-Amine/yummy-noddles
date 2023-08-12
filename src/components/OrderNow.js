import CTA from './CTA'
import '../styles/order.scss'

function OrderNow() {
  return (
    <div className='Order'>
        <h3 className='Order--header'>Order Now</h3>
        <CTA />
    </div>
  )
}

export default OrderNow