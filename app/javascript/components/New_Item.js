import React from 'react'

function New_Item(props) {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { 
      e.preventDefault();
      props.handleFormSubmit(
        formFields.name.value,
        formFields.description.value
      ); 
      e.target.reset();}
  }>
     <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/><br></br>
     <input ref={input => formFields.description = input} placeholder='Enter a description' /><br></br>
     <button>Submit</button>
    </form>
  )
}
export default New_Item;