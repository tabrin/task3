import React, { useState } from 'react'
interface IFormData {
    fname: string;
    lname: string;
    email: string;
    dob: string;
    address: string;
  }
const Form:React.FC=()=>{
    const [formData, setFormData] = useState<IFormData[]>([]);
    const [inputFields, setInputFields] = useState<IFormData>({
        fname: '',
        lname: '',
        email: '',
        dob: '',
        address: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputFields({ ...inputFields, [name]: value });
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputFields)
      };
    return(
        <>
        <div className="form-wrraper" ></div>
        <form className='form1'  onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <p>Fill out the form carefully for registration</p>
        <strong><label htmlFor="fname">First Name :</label><br /></strong>
        <input type="text" name='fname' placeholder='fiest name' value={inputFields.fname}
          onChange={handleChange}/><br /><br />
       <strong> <label htmlFor="lname">Last Name :</label><br /></strong>
        <input type="text" name='lname' placeholder='last name'   value={inputFields.lname}
          onChange={handleChange}/><br /><br />
        <strong><label htmlFor="email">Email :</label></strong><br />
        <input type="email" name='email'placeholder='email' value={inputFields.email}
          onChange={handleChange} /><br /><br />
       <strong><label htmlFor=" dob">Date of Birth :</label></strong><br />
       <input type="date" name='dob' placeholder='birthday'  value={inputFields.dob}
          onChange={handleChange}/><br /><br />      
     <strong> <label htmlFor="address">Address :</label><br /></strong>
      <textarea name="address" id="address" cols={20} rows={2}   value={inputFields.address}
          onChange={handleChange}></textarea><br /><br />

      <button type='submit'>Submit</button>
        </form>




        </>
    )
}
export default Form