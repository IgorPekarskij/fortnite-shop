import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Shop } from "./components/shop/Shop";

function App() {
    return (
        <div className="app">
            <div className="app-background"></div>
            <Header />
            <Shop />
            <Footer />
        </div>
    );
}

export default App;
