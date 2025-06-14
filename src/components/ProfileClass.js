// class based component

import React from "react";
import {useState} from "react"
class ProfileClass extends React.Component {
   
    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }

    render(){
        return (
            <>
            <h1>{this.props.name}

            </h1>
            <h1>{this.props.addres}

            </h1>
            <h1>Email:gaurav@gmail.com

            </h1>
            <h3>count {this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                   count:this.state.count+1
                })
            }}>increment</button>
            </>
        )
    }
}
export default ProfileClass;

