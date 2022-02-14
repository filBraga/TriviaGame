import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEmail, setUserName } from '../redux/actions';
import logo from '../trivia.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      buttomDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
  }

  onSubmitEmail() {
    const { history, handleSendEmail, handleSendNome } = this.props;
    const { email, name } = this.state;
    // console.log(history);
    handleSendEmail(email);
    handleSendNome(name);

    history.push('/carteira');
  }

  validInputs = () => {
    const { email, name } = this.state;
    const re = /\S+@\S+\.\S+/; // usei regex para validar meu email
    const emailcheck = re.test(email);
    const LIMIT_NUMBER = 3;
    // console.log(emailcheck)
    if (emailcheck && name.length >= LIMIT_NUMBER) {
      this.setState({ buttomDisable: false });
    } else {
      this.setState({ buttomDisable: true });
    }
  }

  handleChange({ target }) {
    // console.log(target.value);
    const { name, value } = target;
    this.setState({ [name]: value }, this.validInputs);
  }

  render() {
    const { email, name, buttomDisable } = this.state;
    //  console.log(disable);
    return (
      <div>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            SUA VEZ
          </p>
        </header>
        <label htmlFor={ name }>
          Nome:
          <input
            name="name"
            value={ name }
            data-testid="input-player-name"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor={ email }>
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
          />
        </label>
        <button
          data-testid="btn-play"
          disabled={ buttomDisable }
          type="button"
          onClick={ this.onSubmitEmail }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendEmail: (email) => dispatch(setEmail(email)),
  handleSendNome: (nome) => dispatch(setUserName(nome)),
});

Login.propTypes = {
  handleSendEmail: PropTypes.func.isRequired,
  handleSendNome: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
