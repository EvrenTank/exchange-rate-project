'use client';
import styles from "../../styles/menu/icon.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Icon = ({open,setOpen}:any) => {

    return (
        <div className={styles.container}>

            <div className={styles.div2}>
            <MenuRoundedIcon className={styles.menuIcon}
            onClick={()=>{
                setOpen((prev:boolean) => !prev)
            }}            />
            <img src="money.png" className={styles.image} title="Exchange Rate"></img>
            <h2 className={styles.heading} 
       >Exchange Rate</h2></div>
        </div>
    )
}
export default Icon;