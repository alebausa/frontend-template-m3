import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProject() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const project = await axios.get(`http://localhost:8000/api/v1/projects/${id}`);
        setProject(project.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id])

  const handleChange = (e) => {
    setProject(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
    console.log(project)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProject = await axios.put(`http://localhost:8000/api/v1/projects/${id}`, project);
      navigate(`/projects/${newProject.data.data._id}`)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Edit project</h1>
      {!project && <p>Loading</p>}
      {project && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={project.title} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={project.description} onChange={handleChange} />
          <button type="submit">Save changes</button>
        </form>
      )}
    </div>
  )
}
