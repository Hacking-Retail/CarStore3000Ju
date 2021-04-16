import React, {useState, useMemo, useEffect} from 'react'
import UserService from "../services/user.service";

function Clients () {
  const [users, setUsers] = useState([])

  useEffect(() => {
      UserService.getUsers().then(
        (response) => {
          setUsers(response.data);
        },
        (error) => {
          console.log(error)
        }
      );
  }, []);


  return (
       <div className="container">
            <h3 className="p-3 text-center">List of Clients</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
  )
}

export default Clients