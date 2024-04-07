import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/index';
import IntroPage from './pages/intro';
import MainPage from './pages/main/';
import RecommendPage from './pages/recommend';
import SettingPage from './pages/setting';
import NotFoundPage from './pages/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
