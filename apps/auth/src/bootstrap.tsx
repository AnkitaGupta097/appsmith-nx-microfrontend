import { createRoot } from 'react-dom/client';
import Auth from './features/Auth';

const appElement = document.getElementById('app');

const root = createRoot(appElement!);

root.render(<Auth />);
