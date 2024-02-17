'use client'
import { useState,useEffect } from 'react';
import styles from '../../styles/ana-sayfa/anaSayfa.module.css';
import axios from 'axios';
import Card from './card';
const AnaSayfa = () => {

    // my-api-key : 8352fdcbe6488a878b75f5c1
    //EUR,USD,TRY, JPY, GBP
    const [exchangerates,setExchangerates] = useState<{
        USD: number,
        EUR: number,
        GBP: number,
        JPY: number,
    }>({
        USD: 0,
        EUR: 0,
        GBP: 0,
        JPY: 0

    });
    const getData = () => {
        axios.get(" https://v6.exchangerate-api.com/v6/8352fdcbe6488a878b75f5c1/latest/TRY")
        .then( (response) => {
            console.log("response",response);
            console.log("response.data.conversion_rates",response.data.conversion_rates.USD);
            setExchangerates(response.data.conversion_rates);
        });
    }

    useEffect(()=>{
       getData();
    },[]);

    return (
        <div className={styles.container} onClick={getData}>
            <div className={styles.priceContainer}>
                <Card exchangeName='dolar' value={exchangerates.USD} ></Card>
                <Card exchangeName='euro' value={exchangerates.EUR}></Card>
                <Card exchangeName='pound' value={exchangerates.GBP}></Card>
                <Card exchangeName='yen' value={exchangerates.JPY}></Card>
            </div>

        </div>
    )
}
export default AnaSayfa;