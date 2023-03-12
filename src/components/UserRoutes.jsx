import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'Modules/Loader/Loader';

import PrivateRoute from '../Modules/PrivateRoute/PrivateRoute';
import PublicRoute from '../Modules/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage/PhonebookPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

// const SingleMoviePage = lazy(() =>
//   import('../pages/MovieDetails/MovieDetails')
//);
// const CastPage = lazy(() => import('pages/CastPage/CastPage'));
// const ReviewPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />} >
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhonebookPage />} />
        </Route>

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
