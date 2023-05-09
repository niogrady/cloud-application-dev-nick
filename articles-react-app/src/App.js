import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import ArticleEdit from './components/ArticleEdit';
import DeleteArticle from './components/ArticleDelete';
import ArticleCreate from './components/ArticleCreate';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/articles/:id/edit" element={<ArticleEdit />} />
          <Route path="/articles/:id/delete" element={<DeleteArticle />} />
          <Route path="/articles/:id/create" element={<ArticleCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


