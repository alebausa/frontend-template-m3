import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectDetails() {
  // const params = useParams(); then use with params.id
  const { id } = useParams();
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/projects/${id}`)
        //console.log(response);
        setProject(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } });
      toast.success('Project deleted successfully')
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p>Projects</p>
      {project && (
        <div>
          <h6>Project: {project.title}</h6>
          <p>Description: {project.description}</p>
          <button onClick={handleDelete}>Delete project</button>
          <button onClick={() => navigate(`/edit/${id}`)}>Edit project</button>
        </div>)}
      {!project && <p>Project not found</p>}
    </div>
  )
}
