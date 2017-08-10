import styled from 'styled-components';
import media from '../../media';

export default styled.div`
  position: relative;
  min-height: 100vh;
  background: rgba(255, 255, 255, 1);
  padding: 0 5px;

  ${media.phone`padding: 0 10px;`}
  ${media.tablet`padding: 0 15px;`}
  ${media.desktop`padding: 0 30px;`}
`;
