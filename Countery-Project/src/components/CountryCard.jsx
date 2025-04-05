import React from 'react'

export default function CountryCard({name, flag, population,region,capital}) {
  return (
    <a className="country-card" href={`/country.html?name=${name.common}`}>
      <img src={flag} alt={name + "flag"} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:{population}</b>
         
        </p>
        <p>
          <b>Region: {region} </b>
        </p>
        <p>
          <b>Capital: {capital} </b>
        </p>
      </div>
    </a>
  )
}