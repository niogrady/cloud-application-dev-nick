import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ArticleEdit() {
  const [article, setArticle] = useState({ title: '', body: '', published: false });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/articles/${id}`).then(response => {
      setArticle(response.data);
    });
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setArticle({ ...article, [name]: checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`http://localhost:3000/articles/${id}`, article).then(() => {
      navigate(`/articles/${id}`);
    });
  };

  return (
    <div>
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={article.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" name="body" value={article.body} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label htmlFor="published">Published:</label>
          <input type="checkbox" id="published" name="published" checked={article.published} onChange={handleCheckboxChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ArticleEdit;
