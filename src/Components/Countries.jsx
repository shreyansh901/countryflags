import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

function Countries() {
    const [countries,setCountries]=useState([]);
    const fetchFlags = async () => {
      let url = "https://xcountries-backend.azurewebsites.net/all";
      try {
        let response = await axios(url);
        if (response.status === 200) {
          setCountries(response.data);
        }
        
      } catch (error) {
        console.log(error);
        console.error(error);
      }
    };
    console.log({countries});
    useEffect(()=>{
      fetchFlags();
    }, []);
    
        

    return (
    <div
        style={{
        display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",

    }}>
        {countries.map((country)=>(
            <CountryCard  key={country.name.common}
            name={country.name} 
            flagImg={country.flag} 
            flagAltTxt={country.abbr}/>))}
    </div>)
}
export default Countries;