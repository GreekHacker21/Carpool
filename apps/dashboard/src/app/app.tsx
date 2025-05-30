import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  DashboardPage,
  LoginPage,
  ResetPassword,
  UsersPage,
  UserProfile,
  TripsPage,
} from '@carpool/dashboard/pages';
import { Sidebar } from '@carpool/dashboard/components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { RootStore } from '@carpool/dashboard/redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export function App() {
  const path = useLocation().pathname;

  const userState = useSelector((state: RootStore) => state.user);
  const { user } = userState;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {path !== '/login' && path !== '/reset' && <Sidebar />}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/trips" element={<TripsPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
