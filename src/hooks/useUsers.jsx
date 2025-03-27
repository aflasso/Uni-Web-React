import { useState, useEffect } from "react";
import {getUsers} from "../services/userService"

const useUsers = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() =>
    {
        const fetchUsers = async () =>
        {
            setLoading(true);
            setError(null);
            try
            {
                const response = await getUsers();
                setUsers(response);
            }
            catch (error)
            {
                setError(error.message);
            }
            finally
            {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [reload]);

    const doUsersReload = () =>
    {
        setReload((prev) => !prev);
    }
    return {users, loading, error, doUsersReload};
}

export default useUsers;