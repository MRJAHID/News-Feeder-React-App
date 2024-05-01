import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NewsBoard from "./components/NewsBoard/NewsBoard.jsx";
import './App.css';
import NewsProvider from "./provider/NewsProvider.jsx";

export default function App() {

    return (
        <NewsProvider>
            <Header/>
            <NewsBoard/>
            <Footer/>
        </NewsProvider>
    )
}
