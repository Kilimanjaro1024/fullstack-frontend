import React from "react";

const Form = (props) => {
    //STATE FOR THE FORM
    const [formData, setFormData] = React.useState(props.student);
    console.log(props.student)
  
    //FUNCTIONS
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
      props.handleSubmit(formData); // Submit to Parents desired function
      props.history.push("/"); //Push back to display page
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />    
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="house"
          value={formData.house}
          onChange={handleChange}
        />

        
        <input type="submit" value={props.label} />
      </form>
    );
  };
  
  export default Form;