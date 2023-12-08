import { Formik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { UserDataContext } from "./Context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
function Create(){
  
let {URL_MK}=useContext(UserDataContext)

    let Navigate= useNavigate();

    const handleAdduser= async(values)=>{
      let res=await axios.post(URL_MK,values)
      try {
        if(res.status===201){
          Navigate("/dashboard")
          setData(res.data)
        }
      } catch (error) {
        toast.error('error occured')
      }
    }

const userSchema= Yup.object().shape({
name:Yup.string().required('*This field is required'),
email:Yup.string().email('*Invalid Email').required('*This field is required'),
Mobile:Yup.string().matches(/^\d{10}$/,'*Invalid Mobile No').required('*This field is required'),
username:Yup.string().min(3,'*There should be atleast 3 charecters required'),
password:Yup.string().min(8,'*The password should contains atleast 8 charecters'),
batch:Yup.string()
})
    return (
    <>
    <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Create User</h1>
        </div>
   <div className="row">
    <Formik 
    initialValues={{
      name:"",
      email:"",
      Mobile:"",
      username:"",
      password:"",
      batch:""
    }}
    validationSchema={userSchema}
    onSubmit={(values)=>{
      handleAdduser(values)
    }}
    >
      {({errors,touched,handleBlur,handleChange,handleSubmit})=>(
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange} />
        {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onBlur={handleBlur} onChange={handleChange}/>
        {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobileNo">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name='Mobile' placeholder="Enter Mobile no" onBlur={handleBlur} onChange={handleChange}/>
        {errors.Mobile && touched.Mobile ? <div style={{color:"red"}}>{errors.Mobile}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" name='username' placeholder="Enter Username" onBlur={handleBlur} onChange={handleChange}/>
        {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Enter Password" onBlur={handleBlur} onChange={handleChange}/>
        {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBatch">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" name='batch' placeholder="Enter Batch" onBlur={handleBlur} onChange={handleChange}/>
        {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )}
    </Formik>
   </div>
    </div>
    </>)
}
export default Create