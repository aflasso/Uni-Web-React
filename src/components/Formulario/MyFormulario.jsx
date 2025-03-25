import { useState } from "react";

const MyFormulario = () =>
{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        alert(`Nombre: ${nombre} - Edad: ${edad}`);
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </label>

            <label htmlFor="">
                Email:
                <input type="text" value={email} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default MyFormulario;