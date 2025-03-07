import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import AuthPage from './pages/AuthPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import NetworkPage from './pages/NetworkPage';
// import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/SettingsPage';
import NearbyProfessionals from './components/network/NearbyProfessional';
import CreateStoryPage from './pages/CreateStroyPage';
import StoryViewPage from './pages/StoryViewPage';
import CreatePost from './components/posts/CreatePost';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
          <Route path="/phone-login" element={<AuthPage type="phone-login" />} />
          <Route path="/auth/callback" element={<AuthPage />} />
          
          {/* Profile Setup */}
          <Route path="/profile-setup" element={<ProfileSetupPage />} />
          
          {/* Main App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} /> */}
          <Route path="/settings" element={<SettingsPage />} />
          
          {/* Network Routes */}
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/network/:section" element={<NetworkPage />} />
          <Route path="/network/nearby" element={<NearbyProfessionals />} />
          {/* Chat Routes */}
          <Route path="/chat">
            <Route index element={<ChatPage />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
          <Route path="/posts/create" element={<CreatePost/>}/>
          <Route path="/stories/create" element={<CreateStoryPage/>}/>
          <Route path="/stories/view" element={<StoryViewPage/>}/>
          {/* Redirect root to dashboard or login based on authentication */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;