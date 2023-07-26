import { CartCard } from "../component/CartCard"
import { useTitle } from "../hooks/useTitle"
export const Card = ({title}) => {

  useTitle(title)

  const products = [
    {"id":1,"name":"Apple watch","price":25,"image":"/assets/watch.jpg"},
    {"id":2,"name":"Sony TV","price":200,"image":"/assets/sonytv.jpg"},

  ]

  return (
    <section className="cart">
      <h1>Cart items :{products.length}</h1>
      {
        products.map((product)=>(
          <CartCard key={product.id} product={product}/>
        ))
      }
    </section>
  )
}
