import { useState } from "react"

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange= (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;//sale de la funcion, evitamos que se añadan vacios y al menos 2 caracteres
        
        // setCategories(categories => [inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar GIFs"
            value={inputValue}
            onChange={ onInputChange}
        />
    </form>
  )
}
