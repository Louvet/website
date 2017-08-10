import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import Logo from './logo.svg';

import Header from './Header';

import messages from './messages';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Header>
        <Link to="/"><img src={Logo} alt=""/></Link>
        <nav>
            <ul>
                <li><Link to="/" activeClassName="active"><FormattedMessage {...messages.home} /></Link></li>
                <li><Link to="/contact" activeClassName="active"><FormattedMessage {...messages.contact} /></Link></li>
            </ul>
        </nav>
      </Header>
    );
  }
}

export default TopBar;