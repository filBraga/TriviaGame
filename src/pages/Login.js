import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../services/api';
import { gettokenThunk, setUserName, setEmail } from '../actions';
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
  }

 onSubmitEmail = async () => {
   const { history, handleSendNome, getApiToken, handleSendEmail } = this.props;
   const { name, email } = this.state;
   const tokenAPi = await getToken();
   getApiToken(tokenAPi);
   handleSendNome(name);
   handleSendEmail(email);
   history.push('/jogodomilhao');
 }

  onSubmitConfig = () => {
    const { history } = this.props;
    history.push('/telaconfiguracao');
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
          Play
        </button>
        <button
          data-testid="btn-settings"
          type="button"
          onClick={ this.onSubmitConfig }
        >
          Configurações do jogo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiToken: (payload) => dispatch(gettokenThunk(payload)),
  handleSendNome: (nome) => dispatch(setUserName(nome)),
  handleSendEmail: (email) => dispatch(setEmail(email)),
});

// const mapStateToProps = (state) => ({
//   // console.log(state.wallet.currencies);
//   token: state.tokenReducer.token,
// });

Login.propTypes = {
  getApiToken: PropTypes.func.isRequired,
  handleSendNome: PropTypes.func.isRequired,
  handleSendEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
