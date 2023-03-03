import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState<any>([]);

    const getData = async () => {};

    useEffect(() => {
        getData();
    }, []);

    return <div className="App"></div>;
}

export default App;
