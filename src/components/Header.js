import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import md5 from 'crypto-js/md5';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      // currencies: '',
    };
    // this.func = this.func.bind(this);
  }

  render() {
    const { name, score, gravatarEmail } = this.props;
    const hashCriada = md5(gravatarEmail).toString();

    return (
      <div>
        <header className="Header">
          <div>
            <img
              src={ `https://www.gravatar.com/avatar/${hashCriada}` }
              alt="Avatar"
              data-testid="header-profile-picture"
              className="avatarImage"
            />
          </div>
          <div>
            <h4 data-testid="header-player-name">
              Player Name
              { name }
            </h4>
          </div>
          <div>
            <h4 data-testid="header-score">
              Score:
              { score || '0' }
            </h4>
            {/* <Link to="/search" data-testid="link-to-search">Search </Link> */}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  gravatarEmail: state.player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.objectOf(PropTypes.string).isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
// export default Header;
