//import { StrictMode } from 'react'
import './styles/styles.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </StrictMode>,
);
