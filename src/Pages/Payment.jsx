import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import CheckoutForm from '../Components/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'

const Payment = ({ bookingData }) => {
  console.log(bookingData)
  const [stripe, setStripe] = useState(null)
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeInstance = await loadStripe(
        'pk_test_51Rv49TRx39hn0Agb28OPamOLPiAKef8zzta8RFXKR5hdDrtMcW3oh5khj31ytIjUr074SVCWJk4CDymiOHpFwCuN009kucu3ux'
      )
      setStripe(stripeInstance)
    }

    initializeStripe()
  }, [])

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await Client.post(`${BASE_URL}/create-payment`, {
          amount: bookingData.amount
        })
        setClientSecret(response.data.clientSecret)
      } catch (error) {
        console.error('Error fetching client secret:', error)
      }
    }

    fetchClientSecret()
  }, [])

  return (
    <>
      <h2>Checkout</h2>
      {stripe && clientSecret && (
        <div>
          <Elements stripe={stripe} options={{ clientSecret }}>
            <CheckoutForm bookingData={bookingData} />
          </Elements>
        </div>
      )}
    </>
  )
}

export default Payment
