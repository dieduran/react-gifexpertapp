import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories= [' One Punch','Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd=()=>{
    //     setCategories([...categories,'HunterXHunter'])   //lo agrego a lo anterior  
    //     //si lo quisiera primero ['HunterXHunter',...categories]
    //     //otra forma:
    //     //setCategories( cats => [...cats,'HunterXHunter']) //otra forma
    // }
       //<button onClick={handleAdd} >Agregar</button>

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr/>
            <ol>
                {
                categories.map((categorie,i)=>{  // i es el indice 
                    return <GifGrid 
                                key ={categorie}
                                category={categorie}/>               //<li key={categorie}> {categorie} </li>
                })
                }
            </ol>  
        </>
    )
}
  