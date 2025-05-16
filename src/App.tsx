import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { MiddleSection } from "./middle-section";
import Recommendations from "./mainComponents/Recommendations";
import { SidebarProvider } from './sidebar-context';
import {History} from './mainComponents/History';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <Flex minH='100dvh'>
          <Sidebar />
          <Box flex='1'>
            <Routes>
              <Route path="/" element={<MiddleSection />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </Box>
        </Flex>
      </SidebarProvider>
    </Router>
  );
}

export default App;
