import "./Main.css";
const productos = [
  {
    nombre: "Bicicleta",
    precio: 1000,
    descripcion:
      "20 cambios, cuadro de aluminio, disponible en todos los rodados",
  },
  {
    nombre: "Windows 11 Activado",
    precio: 3000,
    descripcion: "Windows 11 sadfasdfasdfasdfasdfasdfasfa sdasfasdfas fas",
  },
  {
    nombre: "Silla Gamer",
    precio: 2000,
    descripcion: "dssa asdasfasdf asdfasdfasdfas sadfasdfasdfasdf asfasdr",
  },
  {
    nombre: "Bicicleta",
    precio: 1000,
    descripcion: "20 cambios, cuadro de aluminio, disponible en todos los rodados"
  },
  {
    nombre: "Windows 11 Activado",
    precio: 3000,
    descripcion: "Windows 11"
  },
  {
    nombre: "Silla Gamer",
    precio: 2000,
    descripcion: "Silla Gamer"
  },
  {
    nombre: "Auriculares Bluetooth",
    precio: 800,
    descripcion: "Auriculares inalámbricos con cancelación de ruido"
  },
  {
    nombre: "Teclado Mecánico",
    precio: 1200,
    descripcion: "Teclado mecánico retroiluminado RGB"
  },
  {
    nombre: "Mouse Gamer",
    precio: 700,
    descripcion: "Mouse óptico con 7 botones programables"
  },
  {
    nombre: "Monitor 24''",
    precio: 3500,
    descripcion: "Monitor LED Full HD de 24 pulgadas"
  },
  {
    nombre: "Smartphone",
    precio: 5000,
    descripcion: "Celular Android con 128GB de almacenamiento"
  },
  {
    nombre: "Tablet 10''",
    precio: 4000,
    descripcion: "Tablet con pantalla de 10 pulgadas y 64GB"
  },
  {
    nombre: "Impresora Multifunción",
    precio: 2500,
    descripcion: "Impresora, escáner y copiadora WiFi"
  },
  {
    nombre: "Parlante Bluetooth",
    precio: 900,
    descripcion: "Parlante portátil resistente al agua"
  },
  {
    nombre: "Webcam HD",
    precio: 600,
    descripcion: "Cámara web HD 1080p para videollamadas"
  },
  {
    nombre: "Disco SSD 1TB",
    precio: 3200,
    descripcion: "Disco sólido de 1TB para PC o notebook"}
];

const Main = () => {
  return (
    <main>
      <section className="banner">
        <h1>Bienvenido a la tienda</h1>
        <h2>Los mejores precios de la ciudad</h2>
      </section>

      <section className="Productlist">

        
        {productos.map((productos, index) =>{
            return (
          <div className="Product">
          <h2>{productos.nombre}</h2>
          <p>Precio: ${productos.precio}</p>
          <p>Descripcion: {productos.descripcion}</p>
          <button>Comprar</button>
        </div>)
        })}
      </section>
    </main>
  );
};

export default Main;
