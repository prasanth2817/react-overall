import React,{useContext} from "react";
import Tile from "./tile";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserDataContext } from "../Context/UserContext";
import { DashboardDataContext } from "../Context/DashboardContext";
import UseLogout from "./UseLogout";

function Dashboard(){

let {CardData}=useContext(DashboardDataContext)
let {data,setData} = useContext(UserDataContext)
let logout= UseLogout()

let handleDelete=(index)=>{
   let newArray=[...data];
    newArray.splice(index,1);
    setData(newArray);
}
let navigate = useNavigate();
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
            <Button variant="primary" onClick={()=>navigate(`/edit/${i}`)}>Edit</Button>
            &nbsp;
            &nbsp;
            <Button variant="warning" onClick={()=>handleDelete(i)}>delete</Button>
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