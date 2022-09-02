import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function CreateProject() {
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: '',
    description: ''
  })

  const handleChange = (e) => {
    setProject(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProject = await axios.post('http://localhost:8000/api/v1/projects', project, { headers: { Authorization: `Bearer ${storedToken}` } });
      toast.success('Project created successfully')
      navigate(`/projects/${newProject.data.data._id}`)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
        <input type="text" name="title" placeholder="Title" value={project.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={project.description} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
