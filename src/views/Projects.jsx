import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/projects')
        //console.log(response)
        setProjects(response.data.data);
      } catch (error) {
        console.error(error)
      }
    }
    getData();
  }, [])

  return (
    <div>
      <h3>Check out my projects:</h3>
      {!projects && <p>Loading</p>}
      {projects && projects.map(project => {
        return <p key={project._id}><Link to={`/projects/${project._id}`}>{project.title}</Link></p>
      })}
      <Outlet />
    </div>
  )
}
