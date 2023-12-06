import React,{useReducer} from 'react';
import { Button,Table } from 'react-bootstrap';
const data={
    count:0,
    product:[{
        name:"coke",
        price:40
    },{
        name:"pepsi",
        price:35
    }]
}
function UseReducer() {
    const reducer= (state,action)=>{
    switch(action.type)
    {
        case'increment': return{...state,count:state.count+1}

        case'decrement':{
        if(state.count>0)
        return{...state,count:state.count-1}
        else
        return{...state}
        }

        case'deleteproduct':{
        let newproduct=[...state.product]
        newproduct.splice(action.id,1)
        return {...state,product:newproduct}
        }
    }
}
    const [state,dispatch]= useReducer(reducer,data)
  return <> 
   <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">useReducer</h1>
        </div>
        <Button onClick={()=>{dispatch({type:'increment'})}}>+</Button>
        &nbsp;
        <span>{state.count}</span>
        &nbsp;
        <Button onClick={()=>{dispatch({type:'decrement'})}}>-</Button>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
               </tr>
            </thead>
            <tbody>
                { 
                state.product.map((e,i)=>{
                    return <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>
                        <i className="fa-solid fa-pen-to-square" onClick={()=>{}}></i>
                        &nbsp;&nbsp;
                        <i className="fa-solid fa-trash" onClick={()=>{dispatch({type:'deleteproduct'})}}></i>
                        </td>
                    </tr>
})
}
            </tbody>
        </Table>
        </div>
  </>
}

export default UseReducer