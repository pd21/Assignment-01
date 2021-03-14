import React, { Component } from 'react'

import Screen1 from '../Screen1'
import Screen2 from '../Screen2'

import {
    MainContent,
    Progress,
    ProgressContainer,
    Circle,
    Icon,
} from './style'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state  = {
            currentIndex: 0,
            currentWidth: 0,
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            showScreen1: true,
            showScreen2: false,
        }
    }

    handleChangeScreen = () => {
        this.setState({
            showScreen1: false,
            showScreen2: true,
        })
    }

    handleUpdateIndex = () => {
        this.setState({
            currentIndex: this.state.currentIndex+1
        },()=>{
            this.update()
        })
        
    }

    handleDecrementIndex = () => {
        this.setState({
            currentIndex: this.state.currentIndex - 1
        }, () => {
            this.update()
        })
    }

    handlePrev = () => {
        this.setState({
            showScreen1: true,
            showScreen2: false,
            currentIndex:0
        },()=>{
            this.update()
        })
    }

    update = () => { 
        let c = 0

        for(let i=1;i < 5;i++){
            if (i <= this.state.currentIndex){
                c = c+1
                this.setState({
                    ['step'+i]: true,
                })
            }
            else {
                this.setState({
                    ['step' + i]: false,
                })
            }
        }
        if(c !== 4){
            this.setState({
                currentWidth: c/3 * 100
            })
        }
    }

    render() {
        const { step1, step2, step3, step4, currentWidth, showScreen1, showScreen2} = this.state
        return (
            <MainContent>
                <ProgressContainer>
                    <Progress currentWidth={currentWidth}/>
                    <Circle active={step1}>
                        <Icon className="fa fa-circle" />
                    </Circle>
                    <Circle active={step2}>
                        <Icon className="fa fa-circle" />
                    </Circle>
                    <Circle active={step3}>
                        <Icon className="fa fa-circle" />
                    </Circle>
                    <Circle active={step4}>
                        <Icon className="fa fa-circle" />
                    </Circle>
                </ProgressContainer>
                {showScreen1 && 
                    <Screen1 
                        updateIndex={this.handleUpdateIndex} 
                        changeScreen={this.handleChangeScreen}
                        decrementIndex={this.handleDecrementIndex}
                        step1={step1}
                    />
                }
                {
                    showScreen2 && 
                    <Screen2 
                        updateIndex={this.handleUpdateIndex} 
                        decrementIndex={this.handleDecrementIndex}
                        prevScreen={this.handlePrev}
                        step1={step1}
                        step2={step2}
                        step3={step3}
                    />
                }
            </MainContent>
        )
    }
}
