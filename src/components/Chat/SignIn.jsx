import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuth0 } from '@auth0/auth0-react';
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleNameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleStartChatting = (e) => {
    this.props.updateUsername(this.state.username);
  };

  render() {
    const { user } = this.props.auth0;
    console.log(user);
    const { username } = this.state;
    return (
      <div>
        <div>
          <form>
            <fieldset>
              <input
                name='name'
                id='name'
                ref={this.inputRef}
                type='text'
                className='rounded'
                placeholder='Type here...'
                autoComplete='off'
                value={user.nickname}
                onChange={this.handleNameChange}
              />
              <button
                onClick={this.handleStartChatting}
                className='btn btn--primary rounded mg-t-1'
                disabled={!username}
              >
                Start chatting
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  updateUsername: PropTypes.func,
};

export default withAuth0(SignIn);
