import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * General Button component.
 */
const Button = ({ children, type, disabled }) => {
    switch (type) {
      case 'primary':
        return <PrimaryButton disabled={disabled}>{ children }</PrimaryButton>
      case 'secondary':
        return <SecondaryButton disabled={disabled}>{ children }</SecondaryButton>
      case 'inverted':
        return <InvertedButton disabled={disabled}>{ children }</InvertedButton>
      default:
        return <PrimaryButton disabled={disabled}>{ children }</PrimaryButton>
    }
}

export const ButtonBase = styled.button`
  font-family: inherit;
  margin: 10px;
  font-weight: ${props => props.theme.typography.semiBold};
  font-size: 1em;
  line-height: 1.2em;
  width: 162px;
  height: 49px;
`

const PrimaryButton = styled(ButtonBase)`
  color: ${props => {
      if (props.disabled){
          return props.theme.pallet.disabled2
      }
      return props.theme.pallet.white}
  };
  background-color: ${props => {
      if (props.disabled){
          return props.theme.pallet.disabled1
      }
      return props.theme.pallet.primary100}
  };
  &:hover,
  &:focus {
      background-color: ${props => {
          if (props.disabled){
              return props.theme.pallet.disabled1
          }
          return props.theme.pallet.lightGreen}
      };
      color: ${props => {
          if (props.disabled){
              return props.theme.pallet.disabled2
          }
          return props.theme.pallet.blue}
      };
  }
`

const InvertedButton = styled(ButtonBase)`
  color: ${props => {
      if (props.disabled){
          return props.theme.pallet.disabled3
      }
      return props.theme.pallet.primary100}
  };
  background-color: transparent;
  border: 2px solid ${props => {
    if (props.disabled){
      return props.theme.pallet.disabled3
    }
    return props.theme.pallet.primary100
  }};
  &:hover,
  &:focus {
      background-color: ${props => {
          if (props.disabled){
              return 'transparent'
          }
          return props.theme.pallet.primary100}
      };
      color: ${props => {
          if (props.disabled){
              return props.theme.pallet.disabled3
          }
          return props.theme.pallet.white}
      };
  }
`

const SecondaryButton = styled(ButtonBase)`
  color: ${props => {
    if (props.disabled){
        return props.theme.pallet.disabled2
    }
    return props.theme.pallet.blue}
  };
  background-color: ${props => {
    if (props.disabled){
        return props.theme.pallet.disabled1
    }
    return props.theme.pallet.lightBlue}
  };
  &:hover,
  &:focus {
    background-color: ${props => {
        if (props.disabled){
            return props.theme.pallet.disabled1
        }
        return props.theme.pallet.blue}
    };
    color: ${props => {
        if (props.disabled){
            return props.theme.pallet.disabled2
        }
        return props.theme.pallet.white}
    };
  }
`

Button.propTypes = {
    /** Button text or icon. */
    children: PropTypes.string.isRequired,
    /** Disable button. */
    disabled: PropTypes.bool,
    /** The type of button. */
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'inverted'
    ]).isRequired
}

Button.defaultProps = {
    disabled: false,
}

export default Button
