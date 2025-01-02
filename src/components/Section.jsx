import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import MoviePage from './MoviePage';

function Section() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Movies />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/serie/:id" element={<MoviePage />} />
            </Routes>
        </Router>
    );
}

export default Section;
