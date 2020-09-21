import React from 'react';

import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from "./components";
import {fetchData} from "./api";

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data:fetchedData})
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
                <CountryPicker/>
            </div>
        )
    }
}

export default App;