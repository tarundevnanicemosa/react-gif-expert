import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch Man']);        

    const onAddCategory = (newCategory) => {
        //Tarea: agregar una nueva
        //categories.push('One Piece'); NO FUNCIONA
        if(categories.includes(newCategory)) return;
        setCategories( [newCategory,...categories] );//si pongo newCategory al principio, lo que añada se añade al principio de la lista
    }

    return(
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input */}
            {/* <AddCategory setCategories={ setCategories }/> */}
            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

            {/*Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {/* <ol> */}
                { 
                categories.map( (category) => {
                    return (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />)
                    // return (<li key={ category }>{category}</li>)
                    // return(
                    //     <div key={category}>
                    //         <h3>{category}</h3>
                    //         <li>{category}</li>
                    //     </div>
                    // )
                } ) }
                {/* <li>ABC</li> */}
                {/*Gif Items */}
        </>
    )
}