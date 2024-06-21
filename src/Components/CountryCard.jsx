import React from "react";

const CountryCard =({country})=>{
    let{name,flags}=country
    return(
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        padding:"10px",
        margin:"10px",
        border:"1px solid black",
        borderRadius:"8px",
        width:"200px",
        height:"200px",
    }}>
    <img
    src={flags.svg} 
    alt={name.common}
    style={{width:"100px",height:"100px"}}/>    
    <h2>{name.common}</h2>
    </div>
    );
};

export default CountryCard;