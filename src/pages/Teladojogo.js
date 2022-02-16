import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Teladojogo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(questions);
    return (
      <div>
        <Header />
        <h1>Tela do jogo</h1>
        <Questions />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   // console.log(state.wallet.currencies);
//   token: state.token,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getApiToken: (payload) => dispatch(gettokenThunk(payload)),
// });

// Teladojogo.propTypes = {
//   token: PropTypes.string.isRequired,
//   getApiToken: PropTypes.func.isRequired,
// //   history: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default connect()(Teladojogo);
