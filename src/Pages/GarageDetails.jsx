import { useParams } from 'react-router-dom'

const GarageDetails = () => {
  const { id } = useParams()

  const testingOnly = [{ id: 9, name: 'fawaz', location: 'manama' }]
  const garage = testingOnly.find((garage) => garage.id === parseInt(id))

  return (
    <>
      <h2>Garage Details</h2>
      <h3>Name: {garage.name}</h3>
      <h3>Location: {garage.location}</h3>
    </>
  )
}
export default GarageDetails
