import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import styles from './Cards.module.css';


const Cards = ( { data:{confirmed, recovered, deaths, lastUpdate} } ) => {

    if(!confirmed){
        return ( <CircularProgress color="secondary" />);
    }


    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <h5>{new Date(lastUpdate).toDateString()}</h5>
            </div>
            <div className={styles.cards}>
                <Alert className={styles.firstAlert} severity="info">Случаи заболевания: <h2>{confirmed.value}</h2></Alert>
                <Alert className={styles.secondAlert} severity="success">Выздоровело: <h2>{recovered.value}</h2></Alert>
                <Alert className={styles.thirdAlert} severity="error">Летальные исходы: <h2>{deaths.value}</h2></Alert>
            </div>
        </div>
    )
}

export default Cards;