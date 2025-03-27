import { useEffect, useState } from "react";

const UserForm = ({onSave, selectedUser}) =>
{
    const [formData, setFormData] = useState({name: "", age: 0, email: ""});

    useEffect(() => {
        if (selectedUser)
        {
            setFormData(selectedUser);
            return;
        }

        setFormData({name: "", age: 0, email: ""});
    }, [selectedUser]);

    const handleChange = (e) =>
    {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>
    {
        
        e.preventDefault();
        onSave(formData);
    }

    return (
        <>
            <div>
                <h1>{selectedUser ? "Editar usuario" : "Agregar usuario"}</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" name="name" value={formData.name} onChange={handleChange} aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="Age" name="age" value={formData.age} onChange={handleChange} aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="Email" name="email" value={formData.email} onChange={handleChange} aria-describedby="emailHelp" required/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    );
}

export default UserForm;