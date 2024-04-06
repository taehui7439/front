import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/index';
import IntroPage from './pages/intro';
import MainPage from './pages/main/';
import RecommendPage from './pages/recommend';
import SettingPage from './pages/setting';
import NotFoundPage from './pages/notFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<MainPage />} />
                    <Route path="/recommend" element={<RecommendPage />} />
                    <Route path="/setting" element={<SettingPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
