import "./Footer.css";

export function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Igor Pekarsky
                </div>
            </div>
        </footer>
    );
}
