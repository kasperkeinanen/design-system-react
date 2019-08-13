import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { cscTheme } from '../../ThemeWrapper';

/**
 * General Content Switcher Component.
 */
class ContentSwitcher extends Component {
  state = {
    active: 'Left',
  };

  render() {
    const left = this.state.active === 'Left'
      ? (
        <Left
          active
          onClick={(e) => {
            this.setState({ active: 'Left' });
            this.props.click1(e);
          }}
        >
          {this.props.option1}
        </Left>
      )
      : (
        <Left
          onClick={(e) => {
            this.setState({ active: 'Left' });
            this.props.click1(e);
          }}
        >
          {this.props.option1}
        </Left>
      );
    const center = this.state.active === 'Center'
      ? (
        <Center
          active
          onClick={(e) => {
            this.setState({ active: 'Center' });
            this.props.click2(e);
          }}
        >
          {this.props.option2}
        </Center>
      )
      : (
        <Center
          onClick={(e) => {
            this.setState({ active: 'Center' });
            this.props.click2(e);
          }}
        >
          {this.props.option2}
        </Center>
      );
    const right = this.state.active === 'Right'
      ? (
        <Right
          active
          onClick={(e) => {
            this.setState({ active: 'Right' });
            this.props.click3(e);
          }}
        >
          {this.props.option3}
        </Right>
      )
      : (
        <Right
          onClick={(e) => {
            this.setState({ active: 'Right' });
            this.props.click3(e);
          }}
        >
          {this.props.option3}
        </Right>
      );
    return (
      <>
        {left}
        {center}
        {right}
      </>
    );
  }
}

const Base = styled.button`
  font-family: inherit;
  font-weight: ${cscTheme.typography.semiBold};
  font-size: 1em;
  line-height: 1.2em;
  width: 162px;
  height: 49px;
  /* background-color: ${cscTheme.pallet.primary10}; */
  color: ${(p) => (p.active ? cscTheme.pallet.white : cscTheme.pallet.primary100)};
  border: 1px solid ${cscTheme.pallet.primary100};
  background-color: ${(p) => (p.active ? cscTheme.pallet.primary100 : 'transparent')};
  &:hover,
  &:focus {
    color: ${(p) => (p.active ? cscTheme.pallet.white : cscTheme.pallet.lightGreen2)};
    text-decoration: ${(p) => (p.active ? 'none' : 'underline')};
  }
`;

const Left = styled(Base)`
  border-right: none;
  border-radius: 10px 0 0 10px;
`;

const Right = styled(Base)`
  border-left: none;
  border-radius: 0 10px 10px 0;
`;

const Center = styled(Base)`
`;

ContentSwitcher.propTypes = {
  /** Option 1, the default option. */
  option1: PropTypes.string.isRequired,
  /** Option 2. */
  option2: PropTypes.string.isRequired,
  /** Option 3 */
  option3: PropTypes.string.isRequired,
  /** Click handler for option 1. */
  click1: PropTypes.func.isRequired,
  /** Click handler for option 2. */
  click2: PropTypes.func.isRequired,
  /** Click handler for option 3. */
  click3: PropTypes.func.isRequired,
};

/** @component */
export default ContentSwitcher;
