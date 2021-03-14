import styled from 'styled-components'

export const MainContainer = styled.div`
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
export const UserName = styled.div`
   display: flex;
   flex-direction:column;
   margin: 10px 0px;
   height: 55px;
`

export const UserEmail = styled.div`
   display: flex;
   flex-direction:column;
   margin: 10px 0px;
   height: 55px;
`
export const Button = styled.button`
   border: 2px solid pink;
   color: #ff5773;
   border-radius: 5px;
   padding: 8px 30px;
   cursor: pointer;
   font-weight: bold;
`
export const UserError = styled.div`
   font-size: 10px;
   color: red;
`