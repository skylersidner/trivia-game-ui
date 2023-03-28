import { Route, Routes, BrowserRouter } from 'react-router-dom';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/create" element={<div>Create Game</div>} />
                <Route path="/join" element={<div>Join Game</div>} />
                <Route path="/" element={<div>Dashboard is a go!</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes as Routes };
