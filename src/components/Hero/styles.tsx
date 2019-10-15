import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    /* background-image: url("https://images.unsplash.com/photo-1545058746-b3cb62c0b05c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    text-align: center;
    padding: 32px 20px;
    color: white;
    :before {
      content: "";
      position: absolute;
      left: 0; 
      right: 0;
      top: 0; 
      bottom: 0;
      /* background-color: rgba(0,0,0,.5); */
    }
    border-bottom: 1px solid #e6e6e6;
  `,
  Title: styled.h1`
    position: relative;
    color: white;
    font-size: 64px;
    margin-bottom: 4px;
    color: #424242;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  `,
  Subtitle: styled.span`
    position: relative;
    font-size: 32px;
    font-weight: bold;
    color: #f37635;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  `,
}