import React, { Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {
  state = {
    loading: true,
    users: [],
  }

  buildUser = (data) => {
    let user = {};
    user.name = `${data.name.first} ${data.name.last}`;
    user.email = data.email;
    user.phone = data.cell;
    user.favorite = false;
    user.id = this.state.users.length + 1;

    return user;
  };

  componentDidMount() {
      this.populateUsers();

  }

  populateUsers = () => {
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((json) => {
      const user = this.buildUser(json.results[0]);
      const users = [ ...this.state.users, user ];
      this.setState({users});
      if (users.length < 5) {
        this.populateUsers()
      } else {
        this.setState({ loading: false });
      }
    });
  }

  handleUserClick = (id) => {
    const users = this.state.users;

    const newUsers = users.map((user) => {
      if (user.id === id) {
        user.favorite = !user.favorite;
      }
      return { ...user };
    });
    this.setState({ users: newUsers });


  }

  buildUserScreen = () => {
    const { users} = this.state;
    const normalUsers = users.filter((user) => !user.favorite);
    const favoriteUsers = users.filter((user) => user.favorite);

    return (
      <div>
          <div style={{ width: '50%', float: 'left' }}>
            <h2>People I don't like</h2>
            { normalUsers.map((user, idx) => {
              return <Contact onClick={this.handleUserClick} user={user} key={idx} />
              })
            }
          </div>
          <div style={{ width: '50%', float: 'left' }}>
            <h2>People I do like</h2>
            { favoriteUsers.map((user, idx) => {
              return <Contact onClick={this.handleUserClick} user={user} key={idx} />
              })
            }
          </div>
      </div>
    );
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div>
      { loading ? <div>'Loading'</div> : this.buildUserScreen()}
      </div>
    );
  }
}

export default ContactList;
