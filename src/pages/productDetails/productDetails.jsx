import style from "./productsDetails.module.css";
import { useParams } from "react-router-dom";
import { searchProducts } from "../../api";

const ProductsDetails = () => {
  const { id } = useParams();
  const product = searchProducts(id);

  return (
    <div>
      <h3>
        Product: {product.name} id: {id}
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        modi natus debitis iusto perferendis molestiae. Illum, quisquam autem
        aut sapiente animi facilis labore, natus ratione nemo doloremque velit
        eaque consectetur!
      </p>
    </div>
  );
};

export default ProductsDetails;
