import "./App.css";

import { useState, useEffect } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Events from "./pages/Events";

export const supabase = createClient(
  "https://xytvpdkxrzbiykufavpy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dHZwZGt4cnpiaXlrdWZhdnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NzAzNDYsImV4cCI6MjA2NDI0NjM0Nn0.l0R2Xpm32XnrZSKTgBNG6yaD8a1F2jXPAD5c9a4hKzY"
);

const AUTO_LOGOUT_MS = 10 * 60 * 1000; // 10 minutes

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      const timer = setTimeout(() => {
        supabase.auth.signOut();
        alert("You have been logged out due to inactivity.");
      }, AUTO_LOGOUT_MS);

      return () => clearTimeout(timer);
    }
  }, [session]);

  if (!session) {
    return <Login />;
  } else {
  return(
      <Routes>
        <Route path="/main" element={<Main user={session.user} />} />
        <Route path="/profile" element={<UserProfile username="user" avatarUrl="/assets/img/LiNkUS.jpeg" />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
  );}
}