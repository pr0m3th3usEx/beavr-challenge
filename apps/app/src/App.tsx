import { Box, HStack, Link } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Requirements from './pages/Requirements';
import Documents from './pages/Documents';

function App() {
  return (
    <Box display="flex" flexDirection="column" flexWrap="nowrap" justifyContent="start" alignItems="stretch" gap="12px">
      <HStack w="100%" flexGrow={0} flexShrink={1} bg="blue.500" py="18px" px="14px" gap="24px">
        <Link>Requirements</Link>
        <Link>Documents</Link>
      </HStack>
      <Box bg="green" flexGrow={1} height="auto">
        <BrowserRouter>
          <Routes>
            <Route index element={<Requirements />} />
            <Route index element={<Documents />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
