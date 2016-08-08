// App
export * from './components/app';

// Styles
import './styles/index.scss';

// Router
import { APP_ROUTER_PROVIDERS } from './routes';


// Application wide providers
export const APP_PROVIDERS = [
    ...APP_ROUTER_PROVIDERS
];
