import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import Logo from './logo.svg';

import styled from 'styled-components';

import messages from './messages';

const Footer = ({ className, children }) => (
	<footer className={className}>
		{children}
	</footer>
)

const BarFooter = styled(Footer)`
  border-top: 1px solid #666;

  #icon img {
    height: 30px;
  }
`;

class BottomBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BarFooter>
        <Link id="icon" to="/"><img src={Logo} alt=""/></Link>
        <p><FormattedMessage {...messages.copyright}/></p>
      </BarFooter>
    );
  }
}

export default BottomBar;