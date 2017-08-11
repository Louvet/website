import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Div = styled.div`
  position: relative;
  min-height: 100vh;
  background: rgba(255, 255, 255, 1);
  padding: 0 5px;

  ${media.xs`padding: 0 10px;`}
  ${media.sm`padding: 0 15px;`}
  ${media.lg`padding: 0 30px;`}
`;



export default class Wrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  componentWillUnmount() {
    const xxs = window.matchMedia('all and (max-width: 479px)');
    const xs = window.matchMedia('all and (min-width: 480px) and (max-width: 767px)');
    const sm = window.matchMedia('all and (min-width: 768px) and (max-width: 1023px)');
    const md = window.matchMedia('all and (min-width: 1024px) and (max-width: 1199px)');
    const lg = window.matchMedia('all and (min-width: 1200px)');

    this.onXXSResponsiveBreakpoint(xxs);
    xxs.removeListener(this.onXXSResponsiveBreakpoint.bind(this));

    this.onXSResponsiveBreakpoint(xs);
    xs.removeListener(this.onXSResponsiveBreakpoint.bind(this));

    this.onSMResponsiveBreakpoint(sm);
    sm.removeListener(this.onSMResponsiveBreakpoint.bind(this));

    this.onMDResponsiveBreakpoint(md);
    md.removeListener(this.onMDResponsiveBreakpoint.bind(this));

    this.onLGResponsiveBreakpoint(lg);
    lg.removeListener(this.onLGResponsiveBreakpoint.bind(this));
  }

  componentDidMount() {
    
    console.log(media)
    const xxs = window.matchMedia('all and (max-width: 479px)');
    const xs = window.matchMedia('all and (min-width: 480px) and (max-width: 767px)');
    const sm = window.matchMedia('all and (min-width: 768px) and (max-width: 1023px)');
    const md = window.matchMedia('all and (min-width: 1024px) and (max-width: 1199px)');
    const lg = window.matchMedia('all and (min-width: 1200px)');

    this.onXXSResponsiveBreakpoint(xxs);
    xxs.addListener(this.onXXSResponsiveBreakpoint.bind(this));

    this.onXSResponsiveBreakpoint(xs);
    xs.addListener(this.onXSResponsiveBreakpoint.bind(this));

    this.onSMResponsiveBreakpoint(sm);
    sm.addListener(this.onSMResponsiveBreakpoint.bind(this));

    this.onMDResponsiveBreakpoint(md);
    md.addListener(this.onMDResponsiveBreakpoint.bind(this));

    this.onLGResponsiveBreakpoint(lg);
    lg.addListener(this.onLGResponsiveBreakpoint.bind(this));
  }

  onXXSResponsiveBreakpoint(mediaQuery) {
        if (mediaQuery.matches) {
          this.setState({ mode: 'xxs', mobile: true});
        }
   }

   onXSResponsiveBreakpoint(mediaQuery) {
        if (mediaQuery.matches) {
            this.setState({ mode: 'xs', mobile: true});
        }
   }

   onSMResponsiveBreakpoint(mediaQuery) {
        if (mediaQuery.matches) {
            this.setState({ mode: 'sm', mobile: true});
        }
   }

   onMDResponsiveBreakpoint(mediaQuery) {
        if (mediaQuery.matches) {
            if(null != navigator.userAgent.match(/iPad/i)) {
                this.setState({ mode: 'md', mobile: true});
            } else {
                this.setState({ mode: 'md', mobile: false});
            }
        }
   }

   onLGResponsiveBreakpoint(mediaQuery) {
        if (mediaQuery.matches) {
            this.setState({ mode: 'lg', mobile: false});
        }
   }

  render() {
    return (
      <Div className={this.state.mobile ? ('mobile ' + this.state.mode) : (this.state.mode)}>
        {this.props.children}
      </Div>
    );
  }
}
