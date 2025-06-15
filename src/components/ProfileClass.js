// class based component

import React from "react";
import {useState} from "react"
import Skeleton from "./skeleton";
class ProfileClass extends React.Component {
   
    constructor(props){
        super(props);

        this.state={
            userdetail:null
        }
    }
    async componentDidMount(){
        
          const  resdata = await fetch('https://api.github.com/users/gauravgitdev')
            resdata = resdata.json();
             this.setstate={
               userdetail:resdata
             
         }
     }
    render(){

        if(this.state.userdetail === null){
            <Skeleton/>
        }


        const {name,avatar_url} = this.state.userdetail
        return (
            <>
            {/* <h1>{this.props.name}

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
            }}>increment</button> */
            
            <>
          <h1>name:{name}</h1>
          <img src={avatar_url}></img>

            </>
            }
            </>
        )
    }
}
export default ProfileClass;

