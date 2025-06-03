import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(10);
    const { images, isLoading } = useFetchGifs(category);

    /*Lo de abajo sustituido para insertar la linea de arriba
    const [images, setImages] = useState([]);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
    }

    useEffect( () => {//dispara cuando son llamados y no todo el rato
        // getGifs(category)
        //   .then(newImages => setImages(newImages));
        getImages();
    }, [] );
*/

  return (
    <>
        <h3>{ category }</h3>
        {
          // isLoading ? (<h2>Cargando...</h2>):null
          isLoading && (<h2>Cargando...</h2>)
        }
        
        {/* <h5>{counter}</h5>
        <button onClick={()=> setCounter(counter+1)}> +1 </button>  */}
  
          <div className="card-grid">
            {/**images.map */}
            {
              images.map((image) => (
                // <li key={id}>//id o image.id
                //   {title}//title o image.title
                // </li>
                <GifItem 
                  key={image.id}
                  // title= {image.title}
                  // url={image.url}
                  {...image}//esparcir todas las propiedades del image para poder seleccionar las que quiera en la otra clase
                />
              ))
            }
          </div>
    </>
  )
}
