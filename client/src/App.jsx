import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import AppShell from "./components/layout/Shell";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {
  AlertsPage,
  GroceryListPage,
  HouseholdPage,
  HomePage,
  InsightsPage,
  PantryPage,
  RecipesPage,
  SettingsPage,
} from "./pages/GroceryPages";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* RequireAuth wrapper protects the app shell routes */}
              <Route
                element={
                  <RequireAuth>
                    <AppShell />
                  </RequireAuth>
                }
              >
              <Route path="/home" element={<HomePage />} />
              <Route path="/grocery-list" element={<GroceryListPage />} />
              <Route path="/pantry" element={<PantryPage />} />
              <Route path="/alerts" element={<AlertsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/household" element={<HouseholdPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/dashboard" element={<Navigate to="/home" replace />} />
              <Route path="/transactions" element={<Navigate to="/grocery-list" replace />} />
              <Route path="/analytics" element={<Navigate to="/insights" replace />} />
              <Route path="/budgets" element={<Navigate to="/pantry" replace />} />
              <Route path="/import" element={<Navigate to="/recipes" replace />} />
              <Route path="/ocr" element={<Navigate to="/alerts" replace />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
          </AnimatePresence>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default App;