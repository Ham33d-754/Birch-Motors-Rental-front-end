import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import { useState } from 'react'
import Completion from '../Pages/Completion'
const CheckoutForm = ({ bookingData }) => {
  const stripe = useStripe()
  const elements = useElements()
  let navigate = useNavigate()
  const [successful, setSuccessful] = useState(null)
  const setBooking = async () => {
    console.log(bookingData)
    const res = await Client.post(`${BASE_URL}/bookings`, bookingData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return null
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`
      },
      redirect: 'if_required'
    })

    if (error) {
      console.log(error.message)
    } else {
      await setBooking()
      setSuccessful(true)
    }
  }

  return (
    <>
      {successful ? (
        <Completion />
      ) : (
        <form onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <button type="submit">Pay Now</button>
        </form>
      )}
    </>
  )
}

export default CheckoutForm
