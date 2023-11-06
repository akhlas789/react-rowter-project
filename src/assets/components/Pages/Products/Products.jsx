import { useLoaderData } from "react-router-dom";
import ProductCart from "../../ProductCart/ProductCart";


const Products = () => {
    const { products } = useLoaderData()
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-5 py-5">
                {
                    products.map(product => <ProductCart key={product.id} product={product}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Products;