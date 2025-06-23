import Layout from "../components/Layout/Layout";
import "../style/Login.css"; 
const Login = () => {
    return (
        <>
        <Layout>
         <section id="login-section">
            <h1>Iniciar Sesión</h1>
            <p>Por favor, completa el siguiente formulario para iniciar sesión.</p>
            <form className="login-form-section">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña" />

            <button type="submit">Iniciar Sesión</button>
            </form>
        </section>
        </Layout>

        </>
    )
}

export default Login;