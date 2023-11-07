import React,{useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit=({data,setData})=>{
    let params= useParams()
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[Mobile,setMobile]=useState("")
    let[username,setUsername]=useState("")
    let[batch,setBatch]=useState("")
    let Navigate= useNavigate()

const getData =(index)=>{
    setName(data[index].name)
    setEmail(data[index].email)
    setMobile(data[index].Mobile)
    setUsername(data[index].username)
    setBatch(data[index].batch)
}
useEffect(()=>{
    if((params.id)<data.length)
    {
     getData(params.id)
    }
    else{
        Navigate('/dashboard')
    }
},[])

const handleEdit=()=>{
    let newArray=[...data]
    newArray.splice(Number(params.id),1,{
        name,
        email,
        Mobile,
        username,
        batch
    })
    setData(newArray)
    Navigate('/dashboard')
}
return(
    <>
    <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        </div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" value={Mobile} placeholder="Enter Mobile no" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" value={username} placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleEdit}>
        Submit
      </Button>
    </Form>
    </div>
    </>)
}
export default Edit