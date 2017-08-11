import styled from 'styled-components';
import media from '../../media';

export default styled.header`
  position: fixed;
  top: 0;
  left: 0;

  ${media.xs``}
  ${media.sm``}
  ${media.md`position: static;`}
`;
