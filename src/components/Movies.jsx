import { Link, useLocation } from 'react-router-dom';
import data from '../data.json';

function Movies() {
    const location = useLocation();
    const movies = data.movies; // Acessando os filmes do arquivo JSON
    const series = data.series; // Acessando as séries do arquivo JSON

    const renderList = (items) => {
        return Object.keys(items).map((id) => {
            const item = items[id];
            return (
                <li key={id} className="w-1/4">
                    <Link to={`/${item.title.includes('Simpsons') ? 'movie' : 'serie'}/${id}`} className="block">
                        <img
                            className="scale-90 rounded-md shadow hover:scale-100 transition-transform duration-200"
                            src={item.image}
                            alt={item.title}
                        />
                        <h3 className="mt-2 text-xl">{item.title}</h3>
                    </Link>
                </li>
            );
        });
    };

    // Verificar a rota atual
    const showMovies = location.pathname === '/' || location.pathname === '/filmes';
    const showSeries = location.pathname === '/' || location.pathname === '/series';

    return (
        <div>
            {showMovies && (
                <div className="mb-10">
                    <h2 className="text-5xl bg-red-500 bg-opacity-50 mb-3 p-3 text-white text-center">
                        Filmes
                    </h2>
                    <ul className="flex flex-wrap justify-center gap-6 text-center text-3xl">
                        {renderList(movies)}
                    </ul>
                </div>
            )}

            {showSeries && (
                <div>
                    <h2 className="text-5xl bg-red-500 bg-opacity-50 mb-3 p-3 text-white text-center">
                        Séries
                    </h2>
                    <ul className="flex flex-wrap justify-center gap-6 text-center text-3xl">
                        {renderList(series)}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Movies;
