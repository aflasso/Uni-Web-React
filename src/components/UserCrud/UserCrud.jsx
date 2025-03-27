import useUsers from "../../hooks/useUsers";
import UsersTable from "../UsersTable/UserTable";
import UserForm from "../UserFormulario/UserFormulario";

import { useState, useRef, useEffect } from "react";
import { createUser, updateUser, deleteUser } from "../../services/userService";

const UserCrud = () =>
{
    const {users, loading, error, doUsersReload} = useUsers();
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSave = async (user) =>
    {
        if (selectedUser == null)
        {
            try {
                const response = await createUser(user);
                doUsersReload();
                setSelectedUser(null);
            } catch (error) {
                console.log(error);
            }

            return;
        }

        try {
            const response = await updateUser(user.id, user);
            doUsersReload();
            setSelectedUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (userId) =>
    {
        try {
            
            const response = await deleteUser(userId);
            doUsersReload();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <UsersTable users={users} onDelete={handleDelete} onEdit={setSelectedUser}></UsersTable>
            <UserForm onSave={handleSave} selectedUser={selectedUser}></UserForm>
        </div>
    )
}

export default UserCrud;