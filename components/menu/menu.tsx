"use client";
import styles from "../../styles/menu/menu.module.css";
import { useState } from "react";
const Menu = () => {
 
    const [selectedpage,setSelectedpage] = useState<string>("Ana Sayfa");

    return (
        <div className={styles.menuDiv}>
            <ul className={styles.list}>
                <li style={{
                    color: selectedpage == "Ana Sayfa" ? "blue" : "black"
                }} 
                onClick={()=>{
                    setSelectedpage("Ana Sayfa");
                }}
                >Ana Sayfa</li>
                <li style={{
                    color: selectedpage == "İkinci Sayfa" ? "blue" : "black"
                }} 
                                onClick={()=>{
                                    setSelectedpage("İkinci Sayfa");
                                }}>İkinci Sayfa</li>
                <li style={{
                    color: selectedpage == "Hakkında" ? "blue" : "black"
                }} 
                                onClick={()=>{
                                    setSelectedpage("Hakkında");
                                }}>Hakkında</li>
            </ul>

        </div>
    )
}

export default Menu;