import React, { Component } from 'react';
import './admin.module.css'; // Import CSS file

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
        // Add more users here
      ],
    };
  }

  render() {
    return (
      <div className="admin-page">
        <h1>Admin Page</h1>

        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminPage;
