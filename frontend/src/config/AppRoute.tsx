import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import ArticleCreatePage from "pages/ArticleCreatePage";
import ArticleDetailPage from "pages/ArticleDetailPage";
import HomePage from "pages/HomePage";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<ArticleDetailPage />} />
          <Route path="/create" element={<ArticleCreatePage />} />
        </Route>
        {/* 404 */}
        <Route></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;