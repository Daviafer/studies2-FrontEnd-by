import { useSelector } from "react-redux";
import { Products } from "../../components/products";

const CartProducts = () => {

  const cartProducts = useSelector(state => state.CartProducts)

  return (
    <main>
      <h1>Cart Products</h1>
      <section>
        <Products products={cartProducts} />  
      </section>
    </main>
  );
};

export { CartProducts };
