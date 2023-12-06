import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <h1 className="title">ED PERFUMERIE</h1>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar-item-container" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Perfumes
                    </a>

                    <a class="navbar-item">
                        Marcas
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-white">
                                <CartWidget/>
                                <span class="cart-badge">3</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;