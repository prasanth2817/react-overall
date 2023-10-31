import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Create({data,setData}){
    let[name,setName]=useState("")
    let[Mobile,setMobile]=useState("")
    let[email,setEmail]=useState("")
    let[username,setUsername]=useState("")
    let[batch,setBatch]=useState("")
    let Navigate= useNavigate();

    let handleSave=()=>{
    let newArray=[...data]
    newArray.push({name,email,Mobile,username,batch})
    setData(newArray)
    Navigate('/dashboard')
    }
    return (
    <>
    <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Create User</h1>
        </div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile no" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </div>
    </>)
}
export default Create