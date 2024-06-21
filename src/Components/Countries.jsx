import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

function Countries() {
    const [countries,setCountries]=useState([]);
    const fetchFlags = async () => {
      let url = "https://restcountries.com/v3.1/all";
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
            <CountryCard  country={country}/>))}
    </div>)
}
export default Countries;