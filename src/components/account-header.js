import React from 'react'
import { navigate } from '@reach/router'
import { signIn } from '../components/Login'
import { Link } from 'gatsby';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {user: false};
    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    const token = await signIn.authClient.tokenManager.get('idToken');
    if (token) {
      this.setState({user: token.claims.name});
    } else {
      // Token has expired
      this.setState({user: false});
      localStorage.setItem('isAuthenticated', 'false');
    }
  }

  logout() {
    signIn.authClient.signOut().catch((error) => {
      console.error('Sign out error: ' + error)
    }).then(() => {
      localStorage.setItem('isAuthenticated', 'false');
      this.setState({user: false});
      navigate('/');
    });
  }

  render() {

    return (
      <>
        <React.Fragment>
            {( ()=> {
                if( this.state.user ) {
                    return (
                        <p>Welcome, {this.state.user}. <button onClick={this.logout}>Logout</button></p>
                    )
                }else {
                    return(
                        <Link to="/account">Login</Link>
                    )
                }

            })()}
        </React.Fragment>
      </>
    )
  }
}

export default Account