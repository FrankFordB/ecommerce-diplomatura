import Layout from "../components/Layout/Layout";
import "../style/Register.css";
const Register = () => {
    return (
        <>
        <Layout>
        <section id="register-section">
            <h1>Registro de Usuario</h1>
            <p>Por favor, completa el siguiente formulario para registrarte.</p>
            <form className="register-form-section">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña" />

                
            <button type="submit">Agregar Producto</button>
            </form>
        </section>
        </Layout>

        </>
    )
}

export default Register;