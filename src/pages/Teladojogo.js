import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Teladojogo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(questions);
    const { history } = this.props;
    return (
      <div>
        <Header />
        <h1>Tela do jogo</h1>
        <Questions history={ history } />
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

Teladojogo.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect()(Teladojogo);
