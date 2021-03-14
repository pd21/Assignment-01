import styled from 'styled-components'

export const ScreenContainer = styled.div`
  border:1px solid #bdc3c7;
  padding: 40px;
`

export const Input = styled.input`
  padding: 10px;
  width:  400px;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  color: #95a5a6;
`

export const UserNumber = styled.div`
  display: flex;
  flex-direction:column;
  margin: 10px 0px;
  height: 55px;
`
export const SelectContainer = styled.div`
 margin-bottom: 10px;
 height: 55px;
`
export const Select = styled.select`
  width: 400px;
  padding: 10px;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  color: #95a5a6;
`
export const UserError = styled.div`
  font-size: 10px;
  color: red;
`

export const PrevButton = styled.button`
  border: 2px solid pink;
  color: #ff5773;
  border-radius: 5px;
  padding: 8px 30px;
  cursor: pointer;
  font-weight: bold;
`
export const NextButton = styled(PrevButton)`
  margin-left:20px;
`