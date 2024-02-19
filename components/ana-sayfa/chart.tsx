'use client'
import { LineChart } from '@mui/x-charts/LineChart';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import dayjs,{Dayjs} from 'dayjs';
import axios from 'axios';

import { useState, useEffect } from 'react';
import styles from '../../styles/ana-sayfa/chart.module.css';
const Chart = ({apiKey}:any) => {

    // EUR,USD,TRY, JPY, GBP
    const [doviz, setDoviz] = useState<string>('USD');
    const [range, setRange] = useState<string | any>('week');
    const [enddate,setEnddate] = useState<Dayjs | null>(dayjs());
    const [startdate,setStartdate] = useState<Dayjs | null>( dayjs().subtract(1,range));
    const [x,setX] = useState([]);
    const [y,setY] = useState([]);

    const handleChange = (event: SelectChangeEvent) => {
      setDoviz(event.target.value as string);
      console.log("Döviz:",event.target.value);
      const calculatedDates = calculateDates(dayjs(),dayjs().subtract(1,range),range);
      getDataForDates(calculatedDates,event.target.value);
    };

    const handleRange = (
        event: React.MouseEvent<HTMLElement>,
        newRange: string | any,
      ) => {
        console.log("çalışıyor");
        setRange(newRange);
        setStartdate(dayjs().subtract(1,range));
        const calculatedDates = calculateDates(dayjs(),dayjs().subtract(1,newRange),newRange);
        getDataForDates(calculatedDates,doviz);
      };
    const calculateDates = (start:dayjs.Dayjs, end: dayjs.Dayjs, range:string | any) => {
        const dates : dayjs.Dayjs[] = [];
        console.log("çalışıyor");
        let currentDate = start;
        console.log("currentDate",currentDate);
        console.log("end",end);

        while(end <= currentDate){
            //console.log("çalışmıyor mu yoksa?")
            dates.push(end);
            if(range == "week"){
                end = end.add(1,'day');


            }
            else if(range == 'month'){
                end = end.add(2,'day');


            }
            else {
                end = end.add(1,'month');
                
            }
        } 
        return dates;
    }

    const getDataForDates = (dates: dayjs.Dayjs[], doviz:string) => {
      console.log("çalışıyor");
      console.log("dates", dates);
      console.log("range", range);
      console.log("doviz", doviz);
      const xdatas:any = [];
      const ydatas:any = [];
  
      // Promise dizisi oluştur
      const requests = dates.map((date:any) => {
          xdatas.push(date);
          const url = `https://v6.exchangerate-api.com/v6/${apiKey}/history/TRY/${date.year()}/${date.month() + 1}/${date.date()}`;
          return axios.get(url)
              .then((response:any) => {
                  return response.data.conversion_rates[doviz];
              })
              .catch((error:any) => {
                  console.error(`Error fetching data for ${date}:`, error);
                  // Hata durumunda boş bir değer döndür
                  return null;
              });
      });
  
      // Tüm Promise'leri bekleyerek işlemleri gerçekleştir
      Promise.all(requests)
          .then((results:any) => {
              // Tüm Promise'ler tamamlandığında çalışacak olan kısım
              // results dizisinde her bir API çağrısının sonucu yer alır
              results.forEach((result:any) => {
                  // result null olabilir, bu durumda ydatas'a null eklemeyin
                  if (result !== null) {
                      ydatas.push(1/result);
                  }
              });
              // Tüm veriler işlendikten sonra setX ve setY fonksiyonlarını çağır
              setX(xdatas);
              setY(ydatas);
          })
          .catch((error:any) => {
              console.error('Error processing requests:', error);
          });
  }

   useEffect(()=>{
    console.log("x",x);
    console.log("y",y);
   },[x,y,range,doviz]);
   useEffect(()=>{
    const calculatedDates = calculateDates(dayjs(),dayjs().subtract(1,range),range);
        getDataForDates(calculatedDates,doviz);
   },[]);

    return(

      <div>
      <div className={styles.containerDiv} >  
        <div className={styles.currencyDiv} >        
        <FormControl size="small">
        <InputLabel id="demo-simple-select-label">Döviz türü</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={doviz}
          label="Döviz türü"
          onChange={handleChange}
        >
          <MenuItem value="USD">Dolar</MenuItem>
          <MenuItem value="EUR">Euro</MenuItem>
          <MenuItem value="GBP">Pound</MenuItem>
          <MenuItem value="JPY">Yen</MenuItem>
        </Select>
         </FormControl></div>
      <div className={styles.rangeDiv}>      
        <ToggleButtonGroup
         color="primary"
         value={range}
         size="small"
         exclusive
         onChange={handleRange}>
         <ToggleButton value="week">Hafta</ToggleButton>
         <ToggleButton value="month">Ay</ToggleButton>
         <ToggleButton value="year">Yıl</ToggleButton>
       
      </ToggleButtonGroup></div>
      </div>

    <LineChart
    key={`${y.toString()}-${range}-${doviz}`} 
    xAxis={[{data:x,scaleType:'time'}]}
    series={[
      {
        data: y,
      },
    ]} height={300} width={400}/>
    </div>
    )
}

export default Chart;