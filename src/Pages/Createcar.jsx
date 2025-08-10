const CreateCar = () => {
  // props exmaples { handleSubmit, handleChange, formState, getRideId }

  return (
    <>
      <div>
        <h2>Add a new Car</h2>
        <form>
          <label htmlFor="name">Car Name</label>
          <input type="text" name="name" />
          {/*  */}
          <label htmlFor="carType">Car Type</label>
          <input type="text" name="carType" />
          {/*  */}

          {console.log(carid)}

          {/*  */}
          <button type="submit">Add Car</button>
        </form>
      </div>
    </>
  )
}
export default CreateCar
