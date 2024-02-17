'use client';
import SmallScreenMenu from "../menu/smallScreenMenu";
import Menu from "../menu/menu";
import { useState,useEffect } from "react";
const MainComponent = () => {

    const [open,setOpen] = useState<boolean>(false);
    const [selectedpage,setSelectedpage] = useState<string>("Ana Sayfa");

    const handleResize =  () => {
        var width = window.innerWidth;
        var height = window.innerHeight;
        console.log("width=", width);
        console.log("height=", height);
        setOpen((prev:boolean)=>{
            return width >= 800 ? false : true;
        })
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize);
    },[])


    return (
        <>
          <Menu open={open} setOpen={setOpen} selectedpage={selectedpage}
          setSelectedpage={setSelectedpage} />
          <SmallScreenMenu open={open} setOpen={setOpen} selectedpage={selectedpage}
          setSelectedpage={setSelectedpage} />
       
        </>);
}

export default MainComponent;