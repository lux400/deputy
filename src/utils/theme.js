import { css } from 'styled-components';

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
};

const fontSize = {};

const media = Object.keys(sizes).reduce(
  (acc, label) => ({
    ...acc,
    [label]: (...args) => `
			@media (max-width: ${sizes[label]}px) {
				${css(...args)};
			}
		`,
  }),
  {},
);

const theme = {
  color: {},
  font: {},
  media,
  fontSize,
  spacing: {
    sm: 10,
    md: 15,
    lg: 20
  }
};

export default theme;
