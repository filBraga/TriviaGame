import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestionAPI, getToken } from '../services/api';
import { gettokenThunk, setScore } from '../actions';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      index: 0,
      answer: [],
      colorGreen: '',
      colorRed: '',
      time: 30,
      disabled: false,
    };
  }

  componentDidMount() {
    this.getApi();
    const MAGIC_NUMBER_TIME = 1000;
    // parte da logica retirada de http://www.desafiosdeti.com.br/sem-categoria/introducao-react-js-criando-um-cronometro/
    this.timer = setInterval(
      () => this.timeQuestions(), MAGIC_NUMBER_TIME,
    );
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

  onSubmitAnswers = (answerCorrect, myAnswer) => {
    const { results, time } = this.state;
    const { handleSendScore } = this.props;
    const MAGIC_NUMBER_SCORE = 10;
    const MAGIC_NUMBER_EASY = 1;
    const MAGIC_NUMBER_MEDIUM = 2;
    const MAGIC_NUMBER_HARD = 3;
    if (answerCorrect !== myAnswer) {
      this.setState({ colorRed: 'incorrect-button',
        colorGreen: 'correct-button',
        disabled: true });
    }
    if (answerCorrect === myAnswer) {
      this.setState({ colorGreen: 'correct-button',
        colorRed: 'incorrect-button',
        disabled: true });
      if (results.difficulty === 'easy') {
        const scoreParcial = MAGIC_NUMBER_SCORE + (time * MAGIC_NUMBER_EASY);
        handleSendScore(scoreParcial);
        localStorage.setItem('score', scoreParcial);
      }
      if (results.difficulty === 'medium') {
        const scoreParcial = MAGIC_NUMBER_SCORE + (time * MAGIC_NUMBER_MEDIUM);
        handleSendScore(scoreParcial);
        localStorage.setItem('score', scoreParcial);
      }
      if (results.difficulty === 'hard') {
        const scoreParcial = MAGIC_NUMBER_SCORE + (time * MAGIC_NUMBER_HARD);
        handleSendScore(scoreParcial);
        localStorage.setItem('score', scoreParcial);
      }
    }
  }

  timeQuestions = () => {
    const { time } = this.state;
    if (time > 0) {
      this.setState({ time: time - 1 });
    }
    if (time === 0) {
      this.setState({ disabled: true, time: 0 });
    }
  }

  setTimeZero = () => {
    this.setState({ time: 1 });
  }

  render() {
    const { answer, results, colorGreen, colorRed, time, disabled } = this.state;
    // console.log(results);
    // console.log(color);
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
                disabled={ disabled }
                className={ answers === results.correct_answer ? colorGreen : colorRed }
                onClick={ () => this.onSubmitAnswers(results.correct_answer, answers) }
              >
                {answers}
              </button>
            )) : null}
        </div>
        {time}
        <button onClick={ this.setTimeZero } type="button" data-testid="btn-next">
          Next
        </button>
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
  handleSendScore: (score) => dispatch(setScore(score)),
});

Questions.propTypes = {
  token: PropTypes.string.isRequired,
  getApiToken: PropTypes.func.isRequired,
  handleSendScore: PropTypes.func.isRequired,
//   history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
