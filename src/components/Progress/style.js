import styled from 'styled-components'

export const MainContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const ProgressContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 350px;
  justify-content: space-between;
  position: relative;
  margin: 40px 0px;
  &::before{
    content:"";
    position: absolute;
    top: 50%;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: -1;
    transition: 0.4s ease;
  }
`
export const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  width: ${props => props.currentWidth+'%'};
  background-color: rgb(255,87,115);
  z-index: -1;
  transition: 0.4s ease;
`

export const Circle = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 3px solid ;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${props => props.active ? '#ff5773':'rgba(0,0,0,0.2)'}
`

export const Icon = styled.i`
  color: #ff5773;;
`