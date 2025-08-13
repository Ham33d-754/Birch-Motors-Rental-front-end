import { Link } from 'react-router-dom'

const Completion = () => {
  return (
    <>
      <div className="payment-success">
        <h2>Payment Successful!</h2>
        <p>Thank you for your payment. Your transaction has been completed.</p>
        <Link to="/">Return to Home</Link>
      </div>
    </>
  )
}
export default Completion
