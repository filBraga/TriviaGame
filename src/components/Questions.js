import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestionAPI, getToken } from '../services/api';
import { gettokenThunk } from '../actions';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      index: 0,
      answer: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const { token, getApiToken } = this.props;
    const { index } = this.state;
    const apiQuestion = await getQuestionAPI(token);
    const NUMBER_FAIL = 3;
    // console.log(teste);
    if (apiQuestion.response_code === NUMBER_FAIL) {
      const newToken = await getToken();
      // console.log(newToken);
      getApiToken(newToken);
      // console.log(newToken);
      this.getApi();
    }
    this.setState({ results: apiQuestion.results[index] }, () => this.getQuestions());
  }

  getQuestions = () => {
    const { results } = this.state;
    if (results !== undefined) {
      const MAGIC_NUMBER = 0.5;
      const answerCorrect = results.correct_answer;
      const answerIncorrect = results.incorrect_answers;
      const answernTotal = [...answerIncorrect, answerCorrect];
      // console.log(questionTotal);
      // logica abaixo retirada de https://pt.stackoverflow.com/questions/466033/estou-querendo-gerar-4-valores-aleat%C3%B3rios-de-uma-array-como-posso-fazer
      const answernMisturado = answernTotal.slice()
        .sort(() => MAGIC_NUMBER - Math.random());
      // console.log(questionMisturado);
      this.setState({ answer: answernMisturado });
    }
  }

  render() {
    const { answer, results } = this.state;
    // console.log(results);
    // console.log(questions);
    if (results === undefined) return null;
    return (
      <div>
        <p data-testid="question-category">{results.category}</p>
        <p data-testid="question-text">{results.question}</p>
        <div data-testid="answer-options">
          {/* <button data-testid="correct-answer" type="button">
            {questions.correct_answer}
          </button> */}
          {answer !== [] ? answer
            .map((answers, index) => (
              <button
                data-testid={ answers === results.correct_answer ? 'correct-answer'
                  : `wrong-answer-${index}` }
                key={ index }
                type="button"
              >
                {answers}
              </button>
            )) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // console.log(state.wallet.currencies);
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  getApiToken: (payload) => dispatch(gettokenThunk(payload)),
});

Questions.propTypes = {
  token: PropTypes.string.isRequired,
  getApiToken: PropTypes.func.isRequired,
//   history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
