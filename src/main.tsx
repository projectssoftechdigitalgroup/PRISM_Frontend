import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider';
import App from './App.tsx';
import 'antd/dist/reset.css'; // For Ant Design v5+

// import AppRouter  from './AppRouter/AppRouter.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App/>
    </Provider>
  </StrictMode>
);
