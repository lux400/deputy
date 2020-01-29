import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)(
  () => `
  color: #444;
  text-decoration: none;
  &.active {
    color: #bbb;
  }
`,
);
