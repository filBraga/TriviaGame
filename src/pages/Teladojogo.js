import React from 'react';
import { connect } from 'react-redux';

class Teladojogo extends React.Component {
  // componentDidUpdate () {
  //     const {token} = this.props;
  //     localStorage.setItem('token', JSON.stringify(token));
  //     console.log(token);
  // }
  render() {
    return (
      <div>
        <h1>Tela do jogo</h1>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   // console.log(state.wallet.currencies);
//   token: state.token.token,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleSendNome: (nome) => dispatch(setUserName(nome)),
//   getApiGravatar: (email) => dispatch(getGravatarThunk(email)),
//   handleSendEmail: (email) => dispatch(setEmail(email)),
// });

// Login.propTypes = {
//   getApiGravatar: PropTypes.func.isRequired,
//   handleSendNome: PropTypes.func.isRequired,
//   handleSendEmail: PropTypes.func.isRequired,
// //   history: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default connect()(Teladojogo);
