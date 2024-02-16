'use client';
import styles from "../../styles/menu/icon.module.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";

const Icon = ({open,setOpen}:any) => {

    return (
        <div className={styles.container}>
            <MenuRoundedIcon className={styles.menuIcon} 
            onClick={()=>{setOpen((prevState:any) => !prevState)}} />
            <div className={styles.div2}>
            <img src="money.png" className={styles.image} title="Exchange Rate"></img>
            <h2 className={styles.heading} 
            style={{
                display: open ? "inline" : "none",
            }} >Exchange Rate</h2></div>
        </div>
    )
}
export default Icon;