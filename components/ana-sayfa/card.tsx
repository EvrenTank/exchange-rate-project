import styles from '../../styles/ana-sayfa/card.module.css';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import CurrencyLiraRoundedIcon from '@mui/icons-material/CurrencyLiraRounded';
import CurrencyPoundRoundedIcon from '@mui/icons-material/CurrencyPoundRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CurrencyYenRoundedIcon from '@mui/icons-material/CurrencyYenRounded';
import Image from 'next/image';

const Card = ({exchangeName,value}:{
    exchangeName: string,
    value:number
}) => {
    
    return (
        <div className={styles.card}>
            <div className={styles.subdiv1}>
                <div className={styles.currencyDiv}>
                    {exchangeName == "dolar" && <AttachMoneyRoundedIcon className={styles.currencyIcon} />}
                    {exchangeName == "euro" && <EuroRoundedIcon className={styles.currencyIcon}/>}
                    {exchangeName == "pound" && <CurrencyPoundRoundedIcon className={styles.currencyIcon}/>}
                    {exchangeName == "yen" && <CurrencyYenRoundedIcon className={styles.currencyIcon}/>}
                    <p>{`${exchangeName}/lira`}</p>
                </div>
                <div className={styles.rateDiv}>
                    <CurrencyLiraRoundedIcon className={styles.liraIcon}/><p>{(1/value).toFixed(4)}</p>
                </div>
            </div>
            <div className={styles.subdiv2}>
                {exchangeName == "dolar" && <Image className={styles.image} src="/usa.png" alt='' width={120} height={120} ></Image>}
                {exchangeName == "euro" && <Image className={styles.image} src="/european-union.png" alt='' width={120} height={120} ></Image>}
                {exchangeName == "pound" && <Image className={styles.image} src="/england.png" alt='' width={120} height={120} ></Image>}
                {exchangeName == "yen" && <Image className={styles.image} src="/japan.png" alt='' width={120} height={120} ></Image>}
            </div> 
        </div>
    )
}
export default Card;