'use client'
import { useState,useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import styles from '../../styles/ana-sayfa/anaSayfa.module.css';
import axios from 'axios';
import Card from './card';
import Chart from './chart';
import { DateCalendar } from '@mui/x-date-pickers';
const AnaSayfa = () => {

    const [date,setDate] = useState<Dayjs | null>(dayjs());
    const today = dayjs();
    const minSelectableDate = today.subtract(1,'year');

    const apiKey = '8352fdcbe6488a878b75f5c1';
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
    const getData = (year?:number,month?:number,day?:number) => {
        var url ;
        if(year && month && day) {
            url = `https://v6.exchangerate-api.com/v6/${apiKey}/history/TRY/${year}/${month}/${day}`;
 
        }
        else {
           url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/TRY`;}
        axios.get(url)
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
        <div className={styles.container} >
            <div className={styles.pagenameContainer} >
                <h2>Ana Sayfa</h2>
            </div>
            <div className={styles.priceContainer}>
                <div className={styles.dateContainer}>{date?.date()}/{date?.month()}/{date?.year()} tarihine ait döviz kurları:</div>
                <Card exchangeName='dolar' value={exchangerates.USD} ></Card>
                <Card exchangeName='euro' value={exchangerates.EUR}></Card>
                <Card exchangeName='pound' value={exchangerates.GBP}></Card>
                <Card exchangeName='yen' value={exchangerates.JPY}></Card>
            </div>
            <div className={styles.calendarandchartContainer}>
                <div className={styles.calendarContainer} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar 
                        sx={{
                            backgroundColor:'white',
                            borderRadius:'4px',
                            boxShadow:'2px 2px 5px gray'
                        }}
                            value={date} 
                            maxDate={today}
                            minDate={minSelectableDate}
                            onChange={(newValue)=> 
                            {
                            setDate(newValue);//burasi dogru sekilde update etmiyor olabilir.
                            console.log("date=",newValue);
                            console.log("date.day =",newValue?.date());
                            console.log("date.month =",(newValue!.month()+1));
                            console.log("date.year =",newValue?.year());
                            getData(newValue!.year(),newValue!.month()+1,newValue!.date());
                            }}/>
                    </LocalizationProvider>
                </div>
                <div className={styles.chartContainer}>
                    <Chart apiKey={apiKey}/>
                </div>
            </div>

        </div>
    )
}
export default AnaSayfa;