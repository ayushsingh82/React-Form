import React from 'react'
import { useState } from 'react';

const App=()=>{

 const [fullName,setFullName]=useState({
  fname:'',
  lname:'',
  email:'',
  phone:'',
  qua:''
});

  const InputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
 
    //  const value=event.target.value;
    //  const name=event.target.name;

       const{value,name}=event.target;

     setFullName((prevValue)=>{
      console.log(prevValue);

      return {
        ...prevValue,
        [name]:value,
      }

    //   if(name==='fName'){
    //     return{
    //     fname:value,
    //     lname:prevValue.lname,
    //     email:prevValue.email,
    //     phone:prevValue.phone
    //   };
    //   }else if (name==='lName'){
    //     return{
    //   fnmae: prevValue.fname,
    //   lname:value,
    //   email:prevValue.email,
    //   phone:prevValue.phone
    //     }
    //   }else if (name==='email'){
    //     return{
    //   fnmae: prevValue.fname,
    //   lname:prevValue.lname,
    //   email:value,
    //   phone:prevValue.phone
    //     }  
    //   }else if (name==='phone'){
    //     return{
    //   fnmae: prevValue.fname,
    //   lname:prevValue.lname,
    //   email:prevValue.email,
    //   phone:value
    //     }
    //   }
     });
    };
  
  const onSubmit=(event)=>{
    event.preventDefault();
    alert('form submitted')
  }

   return(
   <>
    <div className='main_div'>
    <form onSubmit={onSubmit}>
    <div>
      <h1>Hello {fullName.fname} {fullName.lname} </h1>
      <p>{fullName.email} </p>
      <p>{fullName.phone} </p>
      <p>{fullName.qua} </p>

      <input type='text'
       placeholder="Enter your name" defaultValue=""
        name='fname'
      onChange={InputEvent}
      value={fullName.fname}
      ></input>
      <br />


     <input type='text'
       placeholder="Enter your last name" defaultValue=""
      name='lname'
      onChange={InputEvent}
      value={fullName.lname}
      ></input> 
      <br />


      <input type='email'
       placeholder="Enter your email" defaultValue=""
      name='email'
      onChange={InputEvent}
      value={fullName.email}
      autoComplete='off'
      ></input> 
      <br />


      <input type='number'
       placeholder="Enter your phone number" defaultValue=""
      name='phone'
      onChange={InputEvent}
      value={fullName.phone}
      ></input> 
      <br />

      
      <input type='text'
       placeholder="Enter your qualification" defaultValue=""
      name='qua'
      onChange={InputEvent}
      value={fullName.qua}
      ></input> 

      <button type='submit' >SUbmit Me 👍
      </button>
      </div>
      </form>
    </div>
   </>
   );
};



export default App;