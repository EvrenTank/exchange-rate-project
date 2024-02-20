import styles from '../../styles/converter/converter.module.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import CompareArrowsRounded from '@mui/icons-material/CompareArrowsRounded';

const Converter = () => {

    const apiKey = '8352fdcbe6488a878b75f5c1';
    // my-api-key : 8352fdcbe6488a878b75f5c1
    //EUR,USD,TRY, JPY, GBP

    const [doviz,setDoviz] = useState<{base:string,converted:string}>({
        base:"USD",
        converted:"TRY"
    });
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

    const [calculatedvalue,setCalculatedvalue] = useState<number>(0);

    const changePlaces = () => {
        const base = doviz.base;
        setDoviz((doviz)=>{
            return {...doviz,base:doviz.converted,converted:base};
        })
    }
    
    //Bu fonksiyon sayfa yuklendiginde kullanilacak
    const getData = (year?:number,month?:number,day?:number) => {
       
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/TRY`;
        axios.get(url)
        .then((response) => {
            //console.log("response.data.conversion_rates",response.data.conversion_rates.USD);
            setExchangerates(response.data.conversion_rates);
        });
    }
    
    const inputEvent = (event:any) => {
      
        const baseCurrency = doviz.base;
        const convertedCurrency = doviz.converted;
        var baseValue=1;//tl olarak kalırsa oran zaten 1 olacagi icin boyle
        var convertedValue=1; // tl oranları
        if(baseCurrency == "USD"){
            baseValue = exchangerates.USD;
        }
        if(baseCurrency == "EUR"){
            baseValue = exchangerates.EUR;
        }
        if(baseCurrency == "GBP"){
            baseValue = exchangerates.GBP;
        }
        if(baseCurrency == "JPY"){
            baseValue = exchangerates.JPY;            
        }
        if(convertedCurrency == "USD"){
            convertedValue = exchangerates.USD;
        }
        if(convertedCurrency == "EUR"){
            convertedValue = exchangerates.EUR;
        }
        if(convertedCurrency == "GBP"){
            convertedValue = exchangerates.GBP;
        }
        if(convertedCurrency == "JPY"){
            convertedValue = exchangerates.JPY;
        }

        /*const USD = exchangerates.USD; //tl'ye gore oranlari
        const EUR = exchangerates.EUR;
        const GBP = exchangerates.GBP;
        const JPY = exchangerates.JPY;*/
        
        const inputValue = event.target.value as number;
        
        var finalValue:number=0;

        if (baseCurrency == convertedCurrency){
            finalValue = inputValue;
        }
        else if(baseCurrency !== convertedCurrency && baseCurrency == "TRY"){
            finalValue = inputValue * convertedValue;
         }
        else if(baseCurrency !== convertedCurrency && convertedCurrency == "TRY"){
            finalValue = inputValue / baseValue;
        }
        else if(baseCurrency !== convertedCurrency && baseCurrency != "TRY" && convertedCurrency != "TRY") {
            finalValue = inputValue / baseValue * convertedValue;
        }
        setCalculatedvalue(finalValue);

        
    }
    
    const handleChange = (event: SelectChangeEvent) => {
        (event.target.value as string);
        setDoviz((doviz:any)=>{
            return {...doviz,base:event.target.value as string}
        });
        //console.log("Döviz:",event.target.value);
      };
      const handleChange2 = (event: SelectChangeEvent) => {
        (event.target.value as string);
        setDoviz((doviz:any)=>{
            return {...doviz,converted:event.target.value as string}
        });
        //console.log("Döviz:",event.target.value);
      };
     
    useEffect(()=>{getData();},[]);

    return (
        <div className={styles.container}>
            <div className={styles.pagenameContainer} >
                <h2>Kur Dönüştürücü</h2></div>
                <div className={styles.exchangerContainer}>
                    <div className={styles.exchangerDiv}>
                        <div className={styles.selectDiv}>
                        <FormControl size="medium">
        <InputLabel id="demo-simple-select-label">Döviz türü</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={doviz.base}
          label="Döviz türü"
          onChange={handleChange}
          sx={{
            width:"150px",
            
            '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput':{
                display:'flex',
                flexDirection:'row',
                flexWrap:'nowrap',
            }
          }}
        >
          <MenuItem value="TRY" className={styles.menuitem}><Image className={styles.image} src="/turkey.png" width={30} height={30} alt="" ></Image><h3 className={styles.title} >Lira</h3></MenuItem>
          <MenuItem value="USD" className={styles.menuitem}><Image className={styles.image} src="/usa.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Dolar</h3></MenuItem>
          <MenuItem value="EUR" className={styles.menuitem}><Image className={styles.image} src="/european-union.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Euro</h3></MenuItem>
          <MenuItem value="GBP" className={styles.menuitem}><Image className={styles.image} src="/england.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Pound</h3></MenuItem>
          <MenuItem value="JPY" className={styles.menuitem}><Image className={styles.image} src="/japan.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Yen</h3></MenuItem>
        </Select>
         </FormControl>

         <CompareArrowsRoundedIcon className={styles.arrowIcon}
         onClick={changePlaces} />
         
         <FormControl size="medium">
        <InputLabel id="demo-simple-select-label">Döviz türü</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={doviz.converted}
          label="Döviz türü"
          onChange={handleChange2}
          sx={{
            width:"150px",
            
            '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput':{
                display:'flex',
                flexDirection:'row',
                flexWrap:'nowrap',
            }
          }}
        >
          <MenuItem value="TRY" className={styles.menuitem}><Image className={styles.image} src="/turkey.png" width={30} height={30} alt="" ></Image><h3 className={styles.title} >Lira</h3></MenuItem>
          <MenuItem value="USD" className={styles.menuitem}><Image className={styles.image} src="/usa.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Dolar</h3></MenuItem>
          <MenuItem value="EUR" className={styles.menuitem}><Image className={styles.image} src="/european-union.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Euro</h3></MenuItem>
          <MenuItem value="GBP" className={styles.menuitem}><Image className={styles.image} src="/england.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Pound</h3></MenuItem>
          <MenuItem value="JPY" className={styles.menuitem}><Image className={styles.image} src="/japan.png" width={30} height={30} alt=""></Image><h3 className={styles.title}>Yen</h3></MenuItem>
        </Select>
         </FormControl>
                        </div>
                        <div className={styles.inputDiv}>
        <TextField
          id="outlined-number"
          label="From"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            width:'150px'          }}
            onChange={inputEvent}
        />
                <TextField
          id="outlined-number"
          label="To"
          type="number"
          value={calculatedvalue}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly:true
          }}
          sx={{
            width:'150px'          }}
        />

                        </div>
        
                    </div>
            </div>
        </div>
    )
}
export default Converter;