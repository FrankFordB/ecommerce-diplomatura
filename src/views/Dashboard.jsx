import { use, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../style/Dashboard.css"; // Assuming you have a CSS file for styling
const Dashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState (true);
  
  
    useEffect(() => {
      if (price && name.length >  2 && descripcion > 2){
        setIsDisabled(false);
      }
      else { setIsDisabled(true)
        }
      }, [price, name, descripcion]
    );

  const handleName = (e) => {
    setName(e.target.value);
    
  };

  const handlePrice = (e) => {
    setPrice(Number(e.target.value));
    
  };
  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !descripcion) {
        setError("Todos los campos son obligatorios")
        return
    }
    
    
    
    const newProduct = { name, price, descripcion };
    console.log("Producto agregado:", newProduct);
    setPrice("0");
    setName("");
    setDescripcion("");
    setError("");
    setIsDisabled (true);
  };
  
  return (
    <>
      <Layout>
        <section id="admin-section">
          <h1>Panel de Administrador</h1>
          <p>
            Bienvenido al panel de administrador. Aquí puedes gestionar los
            usuarios, ver estadísticas y más.
          </p>
          <form onSubmit={handleSubmit} className="admin-form-section">
            <label htmlFor="name">Nombre del producto</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleName}
              value={name}
              placeholder="Nombre del producto"
            />

            <label htmlFor="price">Precio $</label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={handlePrice}
              value={price}
              placeholder="Precio del producto"
            />

            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              onChange={handleDescripcion}
              value={descripcion}
              placeholder="Descripción del producto"
            ></textarea>
            <button disabled={isDisabled} type="submit">Agregar Producto</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </section>
      </Layout>
    </>
  );
};
export default Dashboard;
