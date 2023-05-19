import { Route, Routes, BrowserRouter } from 'react-router-dom';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/create"
                    element={<div className="text-blue-400">Create Game</div>}
                />
                <Route path="/join" element={<div>Join Game</div>} />
                <Route
                    path="/"
                    element={<div className="btn btn-primary">Dashboard</div>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes as Routes };
