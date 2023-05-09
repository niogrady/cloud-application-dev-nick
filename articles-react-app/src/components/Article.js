import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Article(props) {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(`Fetching article with id: ${id}`);
    axios.get(`http://localhost:3000/articles/${id}`)
      .then(response => {
        setArticle(response.data);
        console.log(`Article with id ${id} fetched:`, response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!article) {
    console.log('Article not yet fetched');
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.published ? 'Published' : 'Unpublished'}</p>
    </div>
  );
}

export default Article;


