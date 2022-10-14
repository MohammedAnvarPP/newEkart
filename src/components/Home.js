import { CartState } from "./context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";

const Home = () => {

    const { state: { products } } = CartState();
    // productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
    // console.log("in home", products);
    // const transformProducts = () => {
    //     let sortedProducts = products;
    //     if (sort) {
    //         sortedProducts = sortedProducts.sort((a, b) =>
    //             (sort === 'lowToHigh' ? a.price - b.price : b.price - a.price)
    //         );
    //     }
    //     if (!byStock) {
    //         sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    //     }
    //     return sortedProducts;
    // }

    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {
                    products.map((prod) => {
                        return (
                            <SingleProducts prod={prod} key={prod.id} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home