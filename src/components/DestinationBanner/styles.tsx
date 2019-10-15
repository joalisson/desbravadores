import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    background-image: url("https://images.unsplash.com/photo-1545058746-4f09b39f583f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 80px;
    color: white;
    text-align: center;
    :before {
      content: "";
      position: absolute;
      left: 0; 
      right: 0;
      top: 0; 
      bottom: 0;
      background-color: rgba(0,0,0,.5);
    }
  `,
  Title: styled.h3`
    z-index: 10;
    position: relative;
    display: block;
    text-align: center;
    font-size: 36px
  `,
  Content: styled.div`
    z-index: 10;
    position: relative;
    span {
      display: inline-block;
      margin: 0px 16px;
      font-size: 20px;
    }
    @media screen and (max-width: 960px) {
      span {
        display: block;
        margin: 0px;
        margin-bottom: 8px;
      }
    }
  `,
}