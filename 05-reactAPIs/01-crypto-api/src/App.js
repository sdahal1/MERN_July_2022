import logo from './logo.svg';
import './App.css';
import FetchCrypto from './components/FetchCrypto';
import AxiosCrypto from './components/AxiosCrypto';
import AxiosCryptoUseEffect from './components/AxiosCryptoUseEffect';

function App() {
    return (
        <div className="App">
            <h1>Crypto API</h1>
            {/* <FetchCrypto></FetchCrypto> */}
            {/* <AxiosCrypto></AxiosCrypto> */}
            <AxiosCryptoUseEffect></AxiosCryptoUseEffect>
        </div>
    );
}

export default App;
