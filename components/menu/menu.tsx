"use client";
import styles from "../../styles/menu/menu.module.css";
import Icon from "./icon";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalculateIcon from '@mui/icons-material/Calculate';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import Link from "next/link";
import { useState } from "react";
const Menu = ({open,setOpen,selectedpage,setSelectedpage}:any) => {
 

    return (
        <div className={styles.menuDiv} 
        style={{
            display: open ? "none" : "flex"
        }} >

            <Icon open={open} setOpen ={setOpen} ></Icon>
            <ul className={styles.list}>
                <Link href = "/" style={{
                    width:"100%",
                }} ><li style={{
                    color: selectedpage == "Ana Sayfa" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{
                    setSelectedpage("Ana Sayfa");
                }}
                title={!open ? "Ana Sayfa" : ""}
                ><HomeRoundedIcon className={styles.materialsIcon} />
                <p >Ana Sayfa</p></li></Link>
                <Link href="/converter" style={{
                    width:"100%",
                }}
                >
                <li style={{
                    color: selectedpage == "Dönüştür" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{
                    setSelectedpage("Dönüştür");
                }}
                title={!open ? "Dönüştür" : ""}
                >
                <CalculateIcon className={styles.materialsIcon}/><p>Dönüştür</p></li></Link>
                <li style={{
                    color: selectedpage == "Hakkında" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{setSelectedpage("Hakkında");}}
                title={!open ? "Hakkında" : ""}
                >
                <HelpCenterRoundedIcon className={styles.materialsIcon}/>
                <p>Hakkında</p></li>
            </ul>

        </div>
    )
}

export default Menu;