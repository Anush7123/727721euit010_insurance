import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css'

function View() {
  const [taskData, setTaskData] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/get', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(taskData); // This will log the updated dataList whenever it changes.
  }, [taskData]);

  return (
    <div>
      
      <center><table className="gen">
      <div className="container12">
        <thead>
          <tr className="form-title">
          <th className="header-cell">Vehicle_Id</th>
            <th className="header-cell">Name</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">Vehicle_no</th>
            <th className="header-cell">Mobile</th>
            <th className="header-cell">Password</th>
            </tr>
        </thead>
        <tbody>
          {taskData.map((customers) => (
            <tr key={customers.vehicle_no}>
              <td>{customers.vehicle_id}</td>
              <td>{customers.name}</td>
              <td>{customers.email}</td>
              <td>{customers.vehicle_no}</td>
              <td>{customers.mobile}</td>
              <td>{customers.password}</td>
              
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table></center>
    </div>
  );
}

export default View;