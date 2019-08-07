import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * General Tooltip component.
 */
const Tooltip = ({ isOpen, close, align, text, children }) => {
  const wrapperTooltipButtonRef = useRef(null)
  const wrapperTooltipCardRef = useRef(null)
  const handleClickOutside = event => {
    if (wrapperTooltipCardRef.current) {
      // If the tooltip card is clicked, tooltip should not be closed. Otherwise, close.
      if (!wrapperTooltipCardRef.current.contains(event.target)) {
        close()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  let tooltip
  switch (align) {
    case 'Right':
      tooltip = (
        <>
          <span ref={wrapperTooltipButtonRef}>
            {children}
          </span>
          <Wrapper ref={wrapperTooltipCardRef}>
            <TooltipRight>
              <TooltipArrowRight />
              <TooltipText>{text}</TooltipText>
            </TooltipRight>
          </Wrapper>
        </>
      )
      break
    case 'Left':
      tooltip = (
        <>
          <span ref={wrapperTooltipButtonRef}>
            {children}
          </span>
          <Wrapper ref={wrapperTooltipCardRef}>
            <TooltipLeft>
              <TooltipText>{text}</TooltipText>
              <TooltipArrowLeft />
            </TooltipLeft>
          </Wrapper>
        </>
      )
      break
    case 'Down':
      tooltip = (
        <>
          <span ref={wrapperTooltipButtonRef}>
            {children}
          </span>
          <Wrapper ref={wrapperTooltipCardRef}>
            <TooltipDown>
              <TooltipArrowDown />
              <TooltipText>{text}</TooltipText>
            </TooltipDown>
          </Wrapper>
        </>
      )
      break
    case 'Up':
      tooltip = (
        <>
          <span ref={wrapperTooltipButtonRef}>
            {children}
          </span>
          <Wrapper ref={wrapperTooltipCardRef}>
            <TooltipUp>
              <TooltipText>{text}</TooltipText>
              <TooltipArrowUp />
            </TooltipUp>
          </Wrapper>
        </>
      )
      break
    default:
      tooltip = (
        <>
          <span ref={wrapperTooltipButtonRef}>
            {children}
          </span>
          <Wrapper ref={wrapperTooltipCardRef}>
            <TooltipDown>
              <TooltipText>{text}</TooltipText>
              <TooltipArrowDown />
            </TooltipDown>
          </Wrapper>
        </>
      )
  }
  return isOpen ? tooltip : children
}
Tooltip.propTypes = {
  /** Prop that control if tooltip should be shown or not. */
  isOpen: PropTypes.bool.isRequired,
  /** Function to close the tooltip. */
  close: PropTypes.func.isRequired,
  /** The direction to align the tooltip. */
  align: PropTypes.string.isRequired,
  /** Content of the tooltip, can be text or a component */
  text: PropTypes.element.isRequired,
  /** The element that the tooltip wrap, eg. icon or text. */
  children: PropTypes.element.isRequired,
}
export default Tooltip
const Wrapper = styled.span`
  position: relative;
`
const TooltipStyle = styled.div`
  z-index: 10;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  position: absolute;
`
const TooltipLeft = styled(TooltipStyle)`
  display: flex;
  margin-left: 5px;
  right: 30px;
  top: -8px;
`
const TooltipRight = styled(TooltipStyle)`
  display: flex;
  margin-left: -5px;
  left: 0px;
  top: -8px;
`
const TooltipDown = styled(TooltipStyle)`
  display: inline-block;
  margin-top: -5px;
  left: -37px;
  top: 30px;
`
const TooltipUp = styled(TooltipStyle)`
  display: inline-block;
  margin-top: 5px;
  left: -37px;
  bottom: 18px;
`
const TooltipArrow = styled.div`
  width: 0;
  height: 0;
`
const TooltipArrowLeft = styled(TooltipArrow)`
  -webkit-filter: drop-shadow(1px 0px 1px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(1px 0px 1px rgba(0, 0, 0, 0.3));
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #fff;
  margin-top: 10px;
`
const TooltipArrowRight = styled(TooltipArrow)`
  -webkit-filter: drop-shadow(-1px 0px 1px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(-1px 0px 1px rgba(0, 0, 0, 0.3));
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #fff;
  margin-top: 10px;
`
const TooltipArrowDown = styled(TooltipArrow)`
  -webkit-filter: drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.3));
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  margin-left: 10px;
`
const TooltipArrowUp = styled(TooltipArrow)`
  -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #fff;
  margin-left: 10px;
`
const TooltipText = styled.div`
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: max-content;
  padding: 10px 15px;
  color: ${p => p.theme.pallet.black};
  font-size: initial;
  line-height: initial;
  font-weight: initial;
  text-align: inherit;
  background-color: ${p => p.theme.pallet.white};
`