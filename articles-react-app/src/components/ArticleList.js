import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArticleList() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      <Link to="/articles/new">Create New Article</Link>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
            <button>
            <Link to={`/articles/${article.id}/edit`}>Edit</Link>
            </button>
            <button>
            <Link to={`/articles/${article.id}/delete`}>Delete</Link>
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
