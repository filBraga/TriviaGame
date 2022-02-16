import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

class Teladojogo extends React.Component {
  render() {
    // const { score } = this.props;

    return (
      <div>
        <Header />
        <h1>Tela do Ranking</h1>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   score: state.player.score,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleSendNome: (nome) => dispatch(setUserName(nome)),
// });

// Teladojogo.propTypes = {
//   score: PropTypes.number.isRequired,
// };

export default connect()(Teladojogo);
