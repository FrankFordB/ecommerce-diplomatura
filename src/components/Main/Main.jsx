import { useEffect, useState } from "react";
import "./Main.css";




const Main = () => {

  const [productos, setProductos] = useState ([]);
  const [errorJson, setErrorJson] = useState("");
  const fetchinfProducts = async () => {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products")
  const data = await respuesta.json()
  setProductos(data);
}catch (error)
 {  setErrorJson("No pude conectarme con la API");

}}
useEffect(() =>{
  fetchinfProducts()
}, [])


  return (
    <main>
      <section className="banner">
        <h1>Bienvenido a la tienda</h1>
        <h2>Los mejores precios de la ciudad</h2>
      </section>

      <section className="Productlist">

        {productos.length === 0 && <p>No hay productos</p>}
         <p> {errorJson} </p>
        {productos.map((producto, index) =>{
            return (
          <div className="Product">
            <img src={producto.image} alt={"imagen del producto" + producto.title} />
          <h2>{producto.title}</h2>
          <p>Precio: ${producto.price}</p>
          <p>Descripcion: {producto.description}</p>
          <button>Comprar</button>
        </div>)
        })}
      </section>
    </main>
  );
};

export default Main;
