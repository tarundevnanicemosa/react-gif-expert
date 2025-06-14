import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//hook es una funcion
export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [] );

    return{
        images,//images: images
        isLoading,
    }
}
