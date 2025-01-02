import { useParams } from 'react-router-dom';
import data from '../data.json';

function MoviePage() {
    const { id } = useParams();

    // Definição de filmes
    const movies = data.movies; // Acessando os filmes do arquivo JSON

    // Definição de séries
    const series = data.series; // Acessando os filmes do arquivo JSON

    // Determinar se é um filme ou uma série
    const movie = movies[id];
    const serie = series[id];

    if (!movie && !serie) {
        return <h2 className="text-center text-3xl mt-10">Item não encontrado!</h2>;
    }

    const item = movie || serie;

    return (
        <div className='flex justify-center flex-col'>
            <div className="bg-black text-white p-10">
                <h2 className="text-center text-5xl mb-6">{item.title}</h2>
                <div className="flex flex-wrap items-start justify-center">
                    <img
                        className="rounded-md shadow mb-4 max-w-sm"
                        src={item.image}
                        alt={item.title}
                    />
                    <p className="px-10 py-4 text-lg w-full lg:w-1/2">{item.description}</p>
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <iframe src={item.play} allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" className="w-[500px] h-[500px] bg-blue-500"></iframe>
            </div>
        </div>
    );
}

export default MoviePage;
