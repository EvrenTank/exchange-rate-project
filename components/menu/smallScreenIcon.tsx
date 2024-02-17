'use client';
import styles from "../../styles/menu/smallScreenIcon.module.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";

const SmallScreenIcon = ({open,setOpen}:any) => {

    return (
        <div className={styles.container}>

            <div className={styles.div2}>
            <MenuRoundedIcon className={styles.menuIcon} 
            onClick={()=>{
                setOpen((prev:boolean) => !prev)
            }}/>
            <img src="money.png" className={styles.image} title="Exchange Rate"></img>
          </div>
        </div>
    )
}
export default SmallScreenIcon;