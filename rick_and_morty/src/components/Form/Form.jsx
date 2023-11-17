import { useState } from "react";
import validation from "../Utilities/validation";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handlesubmit=(event)=>{
event.preventDefault();
   login(userData) 
  }

  return (
    <div class="form">
<div class='banner'>
  <img src='https://i0.wp.com/615film.com/wp-content/uploads/2018/05/rick-and-morty-banner.jpg?w=1160&ssl=1'></img>
</div>
     
      <form class="card ">
      <div class =" formEmail">
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? <p style={c}>{errors.e1}</p> : null}
        {errors.e2 ? <p>{errors.e2}</p> : null}
        {errors.e3 ? <p>{errors.e3}</p> : null}
        </div>
      
        <div class =" formPass">
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {errors.p1 ? <p>{errors.p1}</p> : null}
        {errors.p2 ? <p>{errors.p2}</p> : null}
        </div>
     
        <button class='cardButton' onClick={handlesubmit} type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Forms;
