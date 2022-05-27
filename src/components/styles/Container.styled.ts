import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1288px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  @media ${({theme}) => theme.devices.tablet} {
      padding: 0 57px;
  }

  @media ${({theme}) => theme.devices.desktop} {
      padding: 0 79px;
  }

`