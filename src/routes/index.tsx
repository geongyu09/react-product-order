import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { MyAccountPage } from '@/pages/MyAccountPage';
import NotFound from '@/pages/NotFound';
import { ThemePage } from '@/pages/ThemePage';
import { AuthProvider } from '@/provider/auth/AuthProvider';

import { AuthRoute } from './components/AuthRoute';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ROUTER_PATH } from './path';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
          <Route path={ROUTER_PATH.THEME} element={<ThemePage />} />
          <Route path={ROUTER_PATH.LOGIN} element={<AuthRoute />}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path={ROUTER_PATH.MY_ACCOUNT} element={<ProtectedRoute />}>
            <Route index element={<MyAccountPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
