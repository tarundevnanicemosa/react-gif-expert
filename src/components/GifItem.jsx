
export const GifItem = ({title, url}) => {//solo obtengo esos datos

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
