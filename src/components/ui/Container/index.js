import styled from 'styled-components';

const Container = styled.div(
  ({ theme, fluid }) =>  `
  background: #333;
  width: ${fluid ? '100%' : '1170px'};
  padding-right: ${theme.spacing.md}px;
  padding-left: ${theme.spacing.md}px;
  margin-right: auto;
  margin-left: auto;
	${theme.media.lg`width: 1170px`}
	${theme.media.md`width: 970px`}
	${theme.media.sm`width: 750px`}
	${theme.media.xs`width: 100%`}
`,
);

export default Container;
