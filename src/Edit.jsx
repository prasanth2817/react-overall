import React,{useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { UserDataContext } from "./Context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

const Edit=()=>{

  let {URL_MK}=useContext(UserDataContext)
    const params= useParams();

    // let[name,setName]=useState("")
    // let[email,setEmail]=useState("")
    // let[Mobile,setMobile]=useState("")
    // let[username,setUsername]=useState("")
    // let[batch,setBatch]=useState("")
    

// const getData =(index)=>{
//     setName(data[index].name)
//     setEmail(data[index].email)
//     setMobile(data[index].Mobile)
//     setUsername(data[index].username)
//     setBatch(data[index].batch)
// }
// useEffect(()=>{
//     if((params.id)<data.length)
//     {
//      getData(params.id)
//     }
//     else{
//         Navigate('/dashboard')
//     }
// },[])

const [initialValues,setIntialvalues]=useState({
  name:"",
  email:"",
  Mobile:"",
  username:"",
  password:"",
  batch:""
})
let Navigate= useNavigate();

const userSchema= Yup.object().shape({
  name:Yup.string().required('*This field is required'),
  email:Yup.string().email('*Invalid Email').required('*This field is required'),
  Mobile:Yup.string().matches(/^\d{10}$/,'*Invalid Email').required('*This field is required'),
  username:Yup.string().min(3,'*There should be atleast 3 charecters required'),
  password:Yup.string().min(8,'*The password should contains atleast 8 charecters'),
  batch:Yup.string()
  })

  const getData=async(id)=>{
    let res= await axios.get(`${URL_MK}/${id}`)
    try {
      if(res.status===200){
        toast.success('Data fetched')
        console.log(res.data);
        setIntialvalues(res.data)
      }
    } catch (error) {
      toast.error('error occured')
    }
  }

  const handleEdituser= async(values)=>{
    let res= await axios.put(`${URL_MK}/${params.id}`,values)
    try {
      if(res.status===200){
     Navigate('/dashboard')
      }
    } catch (error) {
      toast.error('error occured')
    }
  }
  // const getData=(index)=>{
  //   let newValues={...initialValues}
  //   newValues.name= data[index].name
  //   newValues.email= data[index].email
  //   newValues.Mobile= data[index].Mobile
  //   newValues.username= data[index].username
  //   newValues.batch= data[index].batch
  //   console.log(newValues);
  //   setIntialvalues(newValues)
  // }
  useEffect(()=>{
        if(Number(params.id))
        {
         getData(Number(params.id))
        }
        else{
            Navigate('/dashboard')
        }
    },[])
// const handleEdit=()=>{
//     let newArray=[...data]
//     newArray.splice(Number(params.id),1,{
//         name,
//         email,
//         Mobile,
//         username,
//         batch
//     })
//     setData(newArray)
//     Navigate('/dashboard')
// }

return(
    <>
    <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        </div>
<div className="row">
  <Formik
  initialValues={initialValues}
  validationSchema={userSchema}
   enableReinitialize= { true }
    onSubmit={(values)=>{
    handleEdituser(values)
    Navigate('/dashboard')
    }}
  >
     {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={values.name} placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange} />
        {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={values.email} placeholder="Enter email" onBlur={handleBlur} onChange={handleChange}/>
        {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name='Mobile' value={values.Mobile} placeholder="Enter Mobile no" onBlur={handleBlur} onChange={handleChange}/>
        {errors.Mobile && touched.Mobile ? <div style={{color:"red"}}>{errors.Mobile}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" name='username' value={values.username} placeholder="Enter Username" onBlur={handleBlur} onChange={handleChange}/>
        {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={values.password} placeholder="Enter Password" onBlur={handleBlur} onChange={handleChange}/>
        {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div>:null}
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBatach">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" name='batch' value={values.batch} placeholder="Enter Batch" onBlur={handleBlur} onChange={handleChange}/>
        {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )}
{/* <Form>
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
    </Form> */}
    </Formik>
</div>
    </div>
    </>)
}
export default Edit