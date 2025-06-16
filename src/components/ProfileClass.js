// class based component

import React from "react";
import {useState} from "react"
import Skeleton from "./skeleton";
class ProfileClass extends React.Component {
   
    constructor(){
        super();

        this.state={
            userdetail:null
        }
    }
    async componentDidMount(){
        
          const  data = await fetch('https://api.github.com/users/raj840968ankit')
            const resdata = await data.json();
            this.setState({
             userdetail: resdata
                });
                this.timer = setInterval(()=>{
                    console.log('gaurav');
                },1000);
     }
       componenentDidUpdate(prevProps,prevState){
        if(this.state.resdata!=prevState.resdata){
            console.log('called did update');
        }
          

        }
        componentWillUnmount(){
            console.log('component will unmount');
            clearInterval(this.timer);

        }

    
    render(){

        if(this.state.userdetail === null){
           return <Skeleton/>
        }


        const {login,avatar_url} = this.state.userdetail
        return (
            
            /* <h1>{this.props.name}

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
          <h1>name:{login}</h1>
          <img src={avatar_url}></img>
          <h1>jvvdvivn</h1>

            </>
            
            
            
        )
    
}}
export default ProfileClass;

