
const UsersTable = ({users, onEdit, onDelete}) => {

    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>

            <tbody>
                {users && users.map((user, index) => {
                    return  (<tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td><button type="button" className="btn btn-primary" onClick={(e) => onEdit(user)}>Update</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={(e) => onDelete(user.id)}>Delete</button></td>
                            </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

export default UsersTable;