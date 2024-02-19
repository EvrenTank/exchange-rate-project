"use client";
import styles from "../../styles/menu/smallScreenMenu.module.css";
import SmallScreenIcon from "./smallScreenIcon";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalculateIcon from '@mui/icons-material/Calculate';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import Link from "next/link";
import { useState } from "react";
const SmallScreenMenu = ({open,setOpen,selectedpage,setSelectedpage}:any) => {
 

    return (
        <div className={styles.smallScreenMenuDiv}
        style={{
            display: open ? "flex" : "none"
        }}>

            <SmallScreenIcon open={open} setOpen ={setOpen} ></SmallScreenIcon>
            <ul className={styles.list}>
                <Link href="/" ><li style={{
                    color: selectedpage == "Ana Sayfa" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{
                    setSelectedpage("Ana Sayfa");
                }}
                title="Ana Sayfa"
                ><HomeRoundedIcon className={styles.materialsIcon}/>
                </li></Link>
                <Link href="/converter">
                <li style={{
                    color: selectedpage == "Dönüştür" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{
                    setSelectedpage("Dönüştür");
                }}
                title="Dönüştür"                >
                <CalculateIcon className={styles.materialsIcon} /></li></Link>
                <li style={{
                    color: selectedpage == "Hakkında" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{setSelectedpage("Hakkında");}}
                title="Hakkında"
                >
                <HelpCenterRoundedIcon className={styles.materialsIcon} />
              </li>
            </ul>

        </div>
    )
}

export default SmallScreenMenu;