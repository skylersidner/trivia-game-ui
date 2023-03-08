import { BrowserRouter } from 'react-router-dom';

function App() {
    return <h1>Hello World</h1>;
}

function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export { WrappedApp as App };
