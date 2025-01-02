function Header() {
    return (
        <header className="flex justify-between items-center p-9">
            <h1 className="text-white text-7xl">Cine Lua</h1>

            <nav className="flex space-x-2 text-center">
                <a href="/" className="text-white text-center hover:cursor-pointer flex flex-col">
                    <i className="bi bi-moon-stars-fill text-4xl hover:text-5xl mr-6"></i>
                    Home
                </a>

                <a href="/filmes" className="text-white text-center hover:cursor-pointer flex flex-col">
                    <i className="bi bi-film text-4xl hover:text-5xl mr-6"></i>
                    Filmes
                </a>
                

                <a href="/series" className="text-white text-center hover:cursor-pointer flex flex-col">
                    <i className="bi bi-tv text-4xl hover:text-5xl mr-6"></i>
                    Series
                </a>
            </nav>

        </header>
    );
}

export default Header;
