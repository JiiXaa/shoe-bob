import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: 50px;
  cursor: pointer;
  span {
    font-size: 100px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click Me
          <span>💩</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
