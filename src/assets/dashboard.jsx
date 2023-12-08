import React,{useContext,useEffect,useState} from "react";
import Tile from "./tile";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import { DashboardDataContext } from "../Context/DashboardContext";
import UseLogout from "./UseLogout";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Dashboard(){

let [data,setData]=useState([]);
let {CardData}=useContext(DashboardDataContext);
let {URL_MK} = useContext(UserDataContext);
let logout= UseLogout();
let Navigate = useNavigate();

let handleDelete= async(id,index)=>{
   let newArray=[...data];
    newArray.splice(index,1);
    setData(newArray);
    try {
      let res= await axios.delete(`${URL_MK}/${id}`)
      if(res.status===200)
      {
        getData()
      }
    } catch (error) {
      toast.error("error occured")
    }
}

const getData= async ()=>{
  try {
    let res= await axios.get(URL_MK)
    if(res.status===200)
    {
    toast.success("user data fetched")
    setData(res.data)
    }
  } catch (error) {
    toast.error("internal server error")
  }
}
useEffect(()=>{
     getData()
},[])


    return<>
       <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={logout}> Log out</Button>
                    </div>
                    <div className="row">
                        {
                            CardData.map((e,i)=>{
                                return <Tile color={e.color} 
                                title={e.title}
                                value={e.value}
                                icon={e.icon}
                                isProgressBar={e.isProgressBar}
                                key={i} />
                            })
                        }
                    </div>
      <div className="row">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>mobile</th>
          <th>username</th>
          <th>batch</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {
      data.map((e,i)=>{
        return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.Mobile}</td>
            <td>{e.username}</td>
            <td>{e.batch}</td>
            <td>
            <Button variant="primary" onClick={()=>Navigate(`/edit/${e.id}`)}>Edit</Button>
            &nbsp;
            &nbsp;
            <Button variant="warning" onClick={()=>handleDelete(e.id,i)}>delete</Button>
            </td>
        </tr>
      })
    }
       </tbody>
    </Table>
    </div>
    </div>
    </>
}
export default Dashboard