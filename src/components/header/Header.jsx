import "./Header.css";

export function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/fortnite-shop/" className="brand-logo logo-image">
                    <img
                        src="/fortnite-shop/logo192.png"
                        alt="Fortnite Shop"
                        width="55px"
                    />
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/IgorPekarskij/fortnite-shop"
                            target="_blank"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
