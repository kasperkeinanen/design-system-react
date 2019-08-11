import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * General Content Switcher Componetn.
 */
const ContentSwitcher = ({option1, option2, option3, click1, click2, click3}) => {
  const [active, setActive] = useState('Left');
  const left = active === 'Left'
    ? (
      <Left
        active
        onClick={(e) => {
        setActive('Left')
        click1(e)
        }}
      >{option1}</Left>
    )
    : (
      <Left
        onClick={(e) => {
        setActive('Left')
        click1(e)
        }}
      >{option1}</Left>
    )
  const center = active === 'Center'
    ? (
      <Center
        active
        onClick={() => {
        setActive('Center')
        click2()
        }}
      >{option2}</Center>
    )
    : (
      <Center
        onClick={() => {
        setActive('Center')
        click2()
        }}
      >{option2}</Center>
    )
  const right = active === 'Right'
    ? (
      <Right
        active
        onClick={() => {
        setActive('Right')
        click3()
        }}
      >{option3}</Right>
    )
    : (
      <Right
        onClick={() => {
        setActive('Right')
        click3()
        }}
      >{option3}</Right>
    )
  return (
    <>
      {left}
      {center}
      {right}
    </>
  )
}

const Base = styled.button`
  font-family: inherit;
  font-weight: ${p => p.theme.typography.semiBold};
  font-size: 1em;
  line-height: 1.2em;
  width: 162px;
  height: 49px;
  /* background-color: ${p => p.theme.pallet.primary10}; */
  color: ${p => p.active ? p.theme.pallet.white : p.theme.pallet.primary100};
  border: 1px solid ${p => p.theme.pallet.primary100};
  background-color: ${p => p.active ? p.theme.pallet.primary100 : 'transparent'};
  &:hover,
  &:focus {
    color: ${p => p.active ? p.theme.pallet.white : p.theme.pallet.lightGreen2};
    text-decoration: ${p => p.active ? 'none' : 'underline'};
  }
`

const Left = styled(Base)`
  border-right: none;
  border-radius: 10px 0 0 10px;
`
const Right = styled(Base)`
  border-left: none;
  border-radius: 0 10px 10px 0;
`
const Center = styled(Base)`

`
ContentSwitcher.propTypes = {
  /** Option 1, the default option. */
  option1: PropTypes.string.isRequired,
  /** Option 2. */
  option2: PropTypes.string.isRequired,
  /** Option 3 */
  option3: PropTypes.string.isRequired,
  /** Click handeler for option 1. */
  click1: PropTypes.func.isRequired,
  /** Click handeler for option 2. */
  click2: PropTypes.func.isRequired,
  /** Click handeler for option 3. */
  click3: PropTypes.func.isRequired,
}

/** @component */
export default ContentSwitcher
