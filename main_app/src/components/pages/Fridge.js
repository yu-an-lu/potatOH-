import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import './Fridge.css';
import data from "../../demo_data.json"; //takes the data

function Fridge (){

  //stores it in state, state is available via food variable, can update the state via setFood function
  const [foods, setFoods] = useState(data); 

  const[addDataToForm, setAddDataToForm] = useState({
    //initialize this to be an object
    //going to use the name of the input to determine what input field and input value has changed 
    productName: '',
    expirationDate: '',
    productCategory: '',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addDataToForm};
    newFormData[fieldName] = fieldValue;

    setAddDataToForm(newFormData);
  }

  const handleAddFormSubmit = (event) =>{
      event.preventDefault();
      const newFood = {
        id: nanoid(),
        productName: addDataToForm.productName,
        expirationDate: addDataToForm.expirationDate,
        productCategory: addDataToForm.productCategory,
      };
      const newFoods = [... foods, newFood];
      setFoods(newFoods);
  }

  const handleRemoveClick = (foodId) => {
    const newFoods = [... foods];

    const index = foods.findIndex((food)=>food.id === foodId);

    newFoods.splice(index, 1);
    setFoods(newFoods);
  }


  return (
    <div className="Fridge">
      <body>
      <h2>Add a Product</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input 
            type="text" 
            name="productName" 
            required="requiered" 
            placeholder="Enter a product..."
            onChange={handleAddFormChange}
            />
            <input 
            type="date" 
            name="expirationDate" 
            required="requiered" 
            placeholder="Enter an expiration date..."
            onChange={handleAddFormChange}
            />
            <input 
            type="text" 
            name="productCategory" 
            required="requiered" 
            placeholder="Enter a product category..."
            onChange={handleAddFormChange}
            />
            <button type="submit">Add to fridge</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Expiration Date</th>
              <th>Product Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            { //going to create a row for each food in our foods array 
              //parse through array, current element will be temp stored in variable food
            foods.map((food)=> (           
            <tr >
              <td>{food.productName}</td>
              <td>{food.expirationDate}</td>
              <td>{food.productCategory}</td>
              <td>
                <button type="button" onClick={()=> handleRemoveClick(food.id)}> Remove </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}
export default Fridge;