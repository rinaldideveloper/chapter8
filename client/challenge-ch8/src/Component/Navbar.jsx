import {Link} from 'react-router-dom';
const Navbar = () => {
return <nav class="navbar navbar-expand-lg bg-dark text-white">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link"><Link to='AddPlayer'>Add Player</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link to='EditPlayer'>Edit Player</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link to='ListPlayer'>List Player</Link></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
}

export default Navbar;