import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { cscTheme } from '../../ThemeWrapper';

/** General Text button. */
const TextButton = ({ disabled, children }) => (
  <TextButtonStyle disabled={disabled}>{children}</TextButtonStyle>
);

const TextButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  margin: 5px;
  font-weight: ${cscTheme.typography.bold};
  font-size: 1.3em;
  line-height: 1.4em;
  color: ${(p) => (p.disabled ? cscTheme.pallet.disabled2 : cscTheme.pallet.primary100)};
  &:hover,
  &:focus {
    background-color: ${(p) => (p.disabled ? 'transparent' : cscTheme.pallet.lightGreen)};
  }
`;

TextButton.propTypes = {
  /** Button text. */
  children: PropTypes.string.isRequired,
  /** Disable button. */
  disabled: PropTypes.bool,
};

TextButton.defaultProps = {
  disabled: false,
};

export default TextButton;
