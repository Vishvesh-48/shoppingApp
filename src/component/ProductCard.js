import "./productcard.css"
export const ProductCard = ({product}) => {

    const {name,price,image}=product

  return (
    <div className="productCard">
        <img src={image} alt={name}></img>
         <p className="name">{name}</p>
         <div className="action">
            <p>${price}</p>
            <button>Add To Card</button>
         </div>
    </div>
  )
}
