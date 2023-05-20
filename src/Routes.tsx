import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { BaseLayout } from './layout';

function AppRoutes() {
    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>
                    <Route
                        path="/create"
                        element={
                            <div className="text-blue-400">Create Game</div>
                        }
                    />
                    <Route path="/join" element={<div>Join Game</div>} />
                    <Route
                        path="/"
                        element={
                            <div className="btn btn-primary">Dashboard</div>
                        }
                    />
                </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
}

export { AppRoutes as Routes };
