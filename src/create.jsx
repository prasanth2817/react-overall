import { Formik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { UserDataContext } from "./Context/UserContext";

function Create(){
  
let {data,setData}=useContext(UserDataContext)

    let Navigate= useNavigate();

const userSchema= Yup.object().shape({
name:Yup.string().required('*This field is required'),
email:Yup.string().email('*Invalid Email').required('*This field is required'),
Mobile:Yup.string().matches(/^\d{10}$/,'*Invalid Email').required('*This field is required'),
username:Yup.string().min(3,'*There should be atleast 3 charecters required'),
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
      batch:""
    }}
    validationSchema={userSchema}
    onSubmit={(values)=>{
      let newArray=[...data]
    newArray.push(values)
    setData(newArray)
    Navigate('/dashboard')
    }}
    >
      {({errors,touched,handleBlur,handleChange,handleSubmit})=>(
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange} />
        {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onBlur={handleBlur} onChange={handleChange}/>
        {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name='Mobile' placeholder="Enter Mobile no" onBlur={handleBlur} onChange={handleChange}/>
        {errors.Mobile && touched.Mobile ? <div style={{color:"red"}}>{errors.Mobile}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" name='username' placeholder="Enter Username" onBlur={handleBlur} onChange={handleChange}/>
        {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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