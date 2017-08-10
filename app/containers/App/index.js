/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import AppWrapper from 'components/AppWrapper';
import TopBar from 'components/TopBar';
import BottomBar from 'components/BottomBar';
import withProgressBar from 'components/ProgressBar';

export default withProgressBar(class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Vincent Louvet"
          defaultTitle="Développeur Web"
          meta={[
            { name: 'description', content: 'Développeur Web à Toulouse' },
          ]}
        />
        <TopBar/>
        <div>
          {React.Children.toArray(this.props.children)}
        </div>
        <BottomBar/>
      </AppWrapper>
    );
  }
}
)