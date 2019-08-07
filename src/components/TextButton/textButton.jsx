import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/** General Text button. */
const TextButton = ({ disabled, children }) => (
  <TextButtonStyle disabled={disabled}>{children}</TextButtonStyle>
)

const TextButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  margin: 5px;
  font-weight: ${props => props.theme.typography.bold};
  font-size: 1.3em;
  line-height: 1.4em;
  color: ${props => props.disabled ? props.theme.pallet.disabled2 : props.theme.pallet.primary100};
  &:hover,
  &:focus {
    background-color: ${props => props.disabled ? 'transparent' : props.theme.pallet.lightGreen};
  }
`

TextButton.propTypes = {
  /** Button text. */
  children: PropTypes.string.isRequired,
  /** Disable button. */
  disabled: PropTypes.bool
}

TextButton.defaultProps = {
  disabled: false,
}

export default TextButton
