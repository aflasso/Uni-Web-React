import { useState } from "react";

const MyFormulario = () =>
{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState(0);

    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);

    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        
        let validationErrors = [];

        if (!isNameValid(nombre))
        {
            validationErrors.push("Name not valid (must be beteen 1 and 50 characters)")
        }

        if (!isAgeValid(edad))
        {
            validationErrors.push("Age not valid (must be 18 or older)")
        }

        if (!isEmailValid(email))
        {
            validationErrors.push("Email not valid (must be a valid email)")
        }

        if (validationErrors.length > 0)
        {
            setErrors(validationErrors)
            return;
        }

        setErrors(null);
        setSuccess(true);

        setData({
            nombre,
            email,
            edad
        })
    }

    const isNameValid = (name) =>
    {
        name = name.trim();
        return name.length > 0 && name.length < 50
    }

    const isAgeValid = (age) =>
    {
        return age >= 18;
    }

    const isEmailValid = (email) =>
    {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </label>

            <label htmlFor="">
                Edad:
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required/>
            </label>

            <label htmlFor="">
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <button type="submit">Enviar</button>

            {errors && (errors.map((error) => <div class="alert alert-danger" role="alert">{error}</div>))}

            {success && (<div class="alert alert-success" role="alert">Form send</div>)}

            {data && (<div>
                <h2>Form data</h2>
                <p>Nombre: {data.nombre}</p>
                <p>Edad: {data.edad}</p>
                <p>Email: {data.email}</p>
            </div>)}
        </form>
    );
}

export default MyFormulario;