"use client";
import styles from "../../styles/menu/menu.module.css";
import Icon from "./icon";
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import HelpCenterSharpIcon from '@mui/icons-material/HelpCenterSharp';
import { useState } from "react";
const Menu = () => {
 
    const [selectedpage,setSelectedpage] = useState<string>("Ana Sayfa");
    const [open,setOpen] = useState<boolean>(false);

    return (
        <div className={styles.menuDiv}>

            <Icon open={open} setOpen ={setOpen} ></Icon>
            <ul className={styles.list}>
                <li style={{
                    color: selectedpage == "Ana Sayfa" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{
                    setSelectedpage("Ana Sayfa");
                }}
                ><HomeIcon style={{
                    fontSize: open ? "30px" : "40px",
                }} />
                <p style={{
                    display: open ? " inline" : "none" 
                }}>Ana Sayfa</p></li>
                <li style={{
                    color: selectedpage == "Dönüştür" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{
                    setSelectedpage("Dönüştür");
                }}>
                <CalculateIcon style={{
                    fontSize: open ? "30px" : "40px",
                }}/><p style={{
                    display: open ? " inline" : "none" 
                }} >Dönüştür</p></li>
                <li style={{
                    color: selectedpage == "Hakkında" ? "orange" : "rgb(200,200,200)"
                }} 
                onClick={()=>{setSelectedpage("Hakkında");}}>
                <HelpCenterSharpIcon style={{
                    fontSize: open ? "30px" : "40px",
                }}/>
                <p style={{
                    display: open ? " inline" : "none" 
                }}>Hakkında</p></li>
            </ul>

        </div>
    )
}

export default Menu;