import "./Header.css";

export function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo logo-image" target="_blank">
                    <img src="/logo192.png" alt="Fortnite Shop" width="55px" />
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/IgorPekarskij/fortnite-shop">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
