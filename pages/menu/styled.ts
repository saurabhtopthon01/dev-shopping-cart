import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: inline-flex;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  width: 90%;
  margin-left: auto;
`;
export const Search = styled.div``;

export const InputWrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-item: center;
  :before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(icons/search.svg) center / contain no-repeat;
  }
  input {
    padding: 10px 30px;
    border-radius: 0.5rem;
    border: none;
    background: white;
    box-shadow: 1px 1px 8px -3px black;
    font-size: 1rem;
    color: #bdbdbd;
  }
`;

export const Txt = styled.p`
  color: #f9a109;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;