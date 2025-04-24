import './index.css'
import {useState} from "react";

function App() {
    const rawProducts = [
        {title:'React - The Complete Guide [Course]', price:19.99, id:'react-course'},
        {title:'Stylish Chair', price:329.49, id:'style-chair'},
        {title:'Ergonomic Chair', price:269.99, id:'erg-chair'},
        {title:'History Video Game Collection', price:99.99, id:'video-games'},
    ]

    const productElements = rawProducts.map(product => (
        <li key={product.id}>{product.title} (${product.price})</li>
    ));

    const [products, setProducts] = useState(productElements);

    function handleOnClick() {
        const id = Math.floor(Math.random() * (10000 - 1)) + 1;
        const anotherProduct = (<li key={id}>Another New Product ($12.99)</li>);
        setProducts(currentProducts => [...currentProducts, anotherProduct]);
    }

    return (
    <>
        <button onClick={handleOnClick}>Add Product</button>
        <ul>{products}</ul>
    </>
  )
}

export default App
