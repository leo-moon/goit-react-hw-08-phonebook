import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'Modules/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const SingleMoviePage = lazy(() =>
//   import('../pages/MovieDetails/MovieDetails')
//);
// const CastPage = lazy(() => import('pages/CastPage/CastPage'));
// const ReviewPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/:media_type/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewPage />} />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
