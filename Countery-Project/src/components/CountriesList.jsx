import React, {useState} from 'react'
import countriesData from '/countriesData.js'
import CountryCard from './CountryCard.jsx'

export default function CountriesList({query}) {

  return (
    <>
    <div className="countries-container">
        {countriesData.filter((country) => 
        country.name.common.toLowerCase().includes(query)).map((country) => {
                return <CountryCard 
                key={country.name.common}
                name={country.name.common} 
                flag={country.flags.svg}
                population={country.population.toLocaleString('en-IN')}
                region={country.region}
                capital={country.capital?.[0]}
                />
            })  
        }
    </div> 
    
    </> 
  )
}
