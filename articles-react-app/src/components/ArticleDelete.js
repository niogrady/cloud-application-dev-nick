import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteArticle = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteArticle = () => {
    axios.delete(`http://localhost:3000/articles/${id}`)
      .then(response => {
        setMessage('Article deleted successfully.');
        navigate('/');
      })
      .catch(error => {
        setMessage('Error deleting article.');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteArticle();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete Article</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default DeleteArticle;



