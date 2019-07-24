import React from "react";
import styled from "styled-components";

// custom imports
import checked from "../assets/checked.png";
import AddItem from "../components/AddItem";

export default function Header(props) {
  return (
    <HeaderWrapper>
      <div>
        <img src={checked} alt="Checked" />
        <h2>Get It Done</h2>
      </div>
      <AddItem addItem={props.addItem} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #24292e;
  color: white;

  div {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
  }
`;
