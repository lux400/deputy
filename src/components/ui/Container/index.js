import styled from 'styled-components';

const Container = styled.div(
  ({ theme, fluid }) =>  `
  width: ${fluid ? '100%' : '1170px'};
  padding-right: ${theme.spacing.md}px;
  padding-left: ${theme.spacing.md}px;
  margin-right: auto;
  margin-left: auto;
	${theme.media.lg`max-width: 1170px`}
	${theme.media.md`max-width: 970px`}
	${theme.media.sm`max-width: 750px`}
	${theme.media.xs`max-width: 100%`}
`,
);

export default Container;
