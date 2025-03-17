import style from "./Products.module.css";

import { getProducts } from "../../api";
import { Link } from "react-router-dom";

const Products = () => {
  const productsArr = getProducts();

  return (
    <>
      <h2>Products section:</h2>
      <ul>
        {productsArr.map((element) => (
          <li key={element.id}>
            <Link to={`${element.id}`}>
              <h3>{element.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
