import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; // This will be the original App.tsx, which we'll convert later
import './index.css'; // We'll create this later for global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
