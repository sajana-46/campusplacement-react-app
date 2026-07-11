import React,{useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'

const ViewRegistration = () => {
   const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Registration</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Registration Number</th>
              <th>Full Name</th>
              <th>Branch</th>
              <th>SSLC Mark</th>
              <th>Plustwo Mark</th>
              <th>UG Mark Mark</th>
              <th>PG Mark Mark</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.regNo}</td>
                        <td>{value.fullName}</td>
                        <td>{value.branch}</td>
                        <td>{value.sslcMark}</td>
                        <td>{value.plusTwoMark}</td>
                        <td>{value.ugMark}</td>
                        <td>{value.pgMark}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

      
    
        
    </div>
  )
}

export default ViewRegistration