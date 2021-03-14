import React, { Component } from 'react'

import {
    ScreenContainer,
    Input,
    UserNumber,
    SelectContainer,
    Select,
    PrevButton,
    NextButton,
    UserError,
}  from './style'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            userNumber:null,
            userNumberErrMessage: false,
            userSelect: '',
            userSelectErrMessage: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            userNumber: e.target.value,
            userNumberErrMessage: null,
        })
    }
    handleBlur= () => {
        const { userNumber} = this.state
        if (userNumber && userNumber >=0 && userNumber <= 100 ){
            this.props.updateIndex()
        }
        else {
            this.setState({
                userNumberErrMessage: true,
            })
        }
    }

    handlePrev = () => {
        this.props.prevScreen()
    }

    handleOnFocus = () => {
        if (this.props.step3) {
            this.props.decrementIndex()
        }
    }

    handleChangeSelect = (e) => {
        this.setState({
            userSelect: e.target.value,
            userSelectErrMessage: null,
        })
    }

    handleNext = () => {
        const { step1, step2, step3} = this.props
        const { userSelect, userSelectErrMessage, userNumberErrMessage} = this.state

        console.log('props', this.props)
        console.log('state', this.state)

        if (userSelect === 'select' || userSelect=== ''){
            this.setState({
                userSelectErrMessage: 'Please select correct option'
            })
        }
        else if (userSelect && step1 && step2 && step3 && !userSelectErrMessage && !userNumberErrMessage){
           this.props.updateIndex()
           console.log('SUCCESS')
           alert('Success')
           //AJAX REQUEST
        }
        else if (!step3){
            this.setState({
                userNumberErrMessage: 'Please enter correct user Number'
            })
        }
    }

    render() {
        const { userNumber, userNumberErrMessage, userSelectErrMessage } = this.state
        return (
            <ScreenContainer>
                <UserNumber>
                    <Input 
                        type='number' 
                        placeholder='Enter number between 0 to 100' 
                        value={userNumber}
                        onChange={(e)=>this.handleChange(e)}
                        onBlur={()=>this.handleBlur()}
                        onFocus={() => this.handleOnFocus()}
                    />
                    {userNumberErrMessage && <UserError>Please enter the correct user number</UserError>}
                </UserNumber>
               
                <SelectContainer>
                <Select name="cars" id="cars" onChange={(e)=>this.handleChangeSelect(e)}>
                    <option value="select">Select</option>
                    <option value="one">Option1</option>
                    <option value="two">Option2</option>
                    <option value="three">Option3</option>
                </Select>
                {userSelectErrMessage && <UserError>{userSelectErrMessage}</UserError>}
                </SelectContainer>

                <PrevButton onClick={() => this.handlePrev()}>Prev</PrevButton>
                <NextButton onClick={() => this.handleNext()}>Next</NextButton>
            </ScreenContainer>
        )
    }
}
