import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    display: inline-flex;
    @media screen and (max-width: 960px) {
      display: block;
    }
  `,
  Item: styled.span`
    display: block;
    .material-icons {
      vertical-align: middle;
      font-size: 16px;
      margin-right: 8px;
      color: #F37735;
    }
  `,
}