const Home = () => {
  return (
    <>
      <img 
      className="home-logo"
      src="src\images\Birch-motor-rental logo.jpeg" alt=" no logo :(" />
      <div className="home-about">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Birch Motors Rental
        </h1>
        <p className="mb-4">
          Birch Motors Rental is your trusted partner for high-quality vehicle
          rentals. We provide a wide range of cars, from compact city cars to
          luxury vehicles, ensuring a safe and comfortable driving experience
          for every customer.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">About Us</h2>
        <p className="mb-4">
          Founded with a passion for excellence, Birch Motors Rental focuses on
          delivering top-notch customer service, flexible rental options, and
          well-maintained vehicles. Whether you need a car for business,
          leisure, or special occasions, we have you covered.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Info</h2>
        <ul className="list-disc list-inside">
          <li>Email: info@birchmotorsrental.com</li>
          <li>Phone: +973 9233 4522</li>
          <li>Address: 123 345 2135, Some Where, Bahrain</li>
        </ul>
      </div>
    </>
  )
}

export default Home
