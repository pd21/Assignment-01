import React, { Component } from 'react'
import { 
    MainContainer,
    Input,
    UserName,
    UserEmail,
    Button,
    UserError,
} from './style';

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            userEmail: '',
            userErrorMsg: false,
            userSubmitErrMsg: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userErrorMsg: false,
        })
    }

    handleChangeEmail = (e)=>{
        this.setState({
            userEmail: e.target.value,
            userSubmitErrMsg: false,
        })
    }

    handleonBlur = () => {
        const { userName } = this.state
        if (userName.match(/^[0-9a-z]+$/)){
            this.props.updateIndex()
        }
        else {
            this.setState({
                userErrorMsg: true,
            })
        }
    }

    handleButtonClick = () => {
        const { userEmail, userName, userErrorMsg} = this.state
        if(userName && !userErrorMsg && userEmail){
            this.props.updateIndex()
            this.props.changeScreen()
        }
        else{
            this.setState({
                userSubmitErrMsg: true,
            })
        }

    }

    handleOnFocus = () => {
        if(this.props.step1){
            this.props.decrementIndex()  
        }
    }

    render() {
        const { userName, userEmail, userErrorMsg, userSubmitErrMsg} = this.state
        return (
            <MainContainer>
                <UserName>
                    <Input 
                        type='text' 
                        placeholder='Enter your username' 
                        required
                        onChange={(e)=>this.handleChange(e)}
                        value={userName}
                        name='userName'
                        onBlur={()=>this.handleonBlur()}
                        onFocus={()=>this.handleOnFocus()}
                    />
                    {userErrorMsg && <UserError>Should contain only alphanumeric</UserError>}
                </UserName>
                <UserEmail>
                    <Input
                        type='text'
                        placeholder='Enter your email'
                        required
                        onChange={(e) => this.handleChangeEmail(e)}
                        value={userEmail}
                        name='userEmail'
                    />
                    {userSubmitErrMsg && <UserError>Please enter correct username/email</UserError>}
                </UserEmail>
                <Button type='submit' onClick={()=>this.handleButtonClick()}>Next</Button>
            </MainContainer>
        )
    }
}
