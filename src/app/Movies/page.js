import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"




const page = async () => {

  await new Promise(resolve=>setTimeout(resolve,2000))


  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'f69137e766msh7b38e9d3eae7c81p159a0fjsnaec961aa5388',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  const main_data = data.titles;
  

  return (
    <section className='{styles.movieSection}'>
    <div className={styles.container}>
      <h1>Series & Movies</h1>
      <div className={styles.card_section}>

    {
    main_data.map((curElem)=>{
      return <MovieCard key={curElem.id} {...curElem}/>
    })
    }
    </div>

    </div>
    </section>
  )
}

export default page