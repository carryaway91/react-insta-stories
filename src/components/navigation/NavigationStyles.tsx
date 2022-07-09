import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  position: fixed;
  border-bottom: 1px solid rgb(206, 204, 204);
  z-index: 1;
`;

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 60rem;
  padding: 0.4rem 0 0;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const NavFill = styled.nav`
  position: relative;
  width: 100%;
  height: 55px;
`;

export const SearchInput = styled.div`
  width: 15rem;
  position: relative;
  background: #efefef;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  position: relative;
  bottom: 0.3rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  background: #efefef;
  color: #8e8e8e;
  outline: none;
  border: none;
  width: 83%;
  &::placeholder {
    font-size: 1rem;
    font-weight: 100;
  }

  &::selection {
    background: black;
    color: white;
  }
`;

export const Close = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #cdc5c5;
  position: absolute;
  right: 12px;
  bottom: 11px;
  color: #efefef;
  cursor: pointer;
`;
