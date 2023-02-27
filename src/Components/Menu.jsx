const Menu = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Press Cricket</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-info" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-success" href="/Rules">Rules</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="/Abt">About me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning " href="/game">Let's play</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
