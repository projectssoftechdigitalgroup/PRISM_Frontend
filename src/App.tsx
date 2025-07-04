import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Sidebar } from "./mainComponents/sidebar";
import { MiddleSection } from "./mainComponents/middle-section";
import Recommendations from "./mainComponents/Recommendations";
import { SidebarProvider } from "./sidebar-context";
import { History } from "./mainComponents/History";
import { TopSection } from "./top-section";
import HomePage from "./mainComponents/HomePage";
import AuthForm from "./mainComponents/auth/Auth";
import 'antd/dist/reset.css'; // For Ant Design v5+
import NewChat from "./mainComponents/NewChat";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/homepage";
  const isAuthPage = location.pathname === "/"; // Check if the current route is for AuthForm

  return (
    <SidebarProvider>
      <Flex minH="100dvh">
        {!isHomePage && !isAuthPage && <Sidebar />} {/* Hide Sidebar on AuthForm */}
        <Box flex="1">
          {!isHomePage && !isAuthPage && <TopSection />} {/* Hide TopSection on AuthForm */}
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/middlesection" element={<MiddleSection />} />
            <Route path="/newChat" element = {<NewChat/>}/>
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Box>
      </Flex>
    </SidebarProvider>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}