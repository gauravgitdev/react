import Profile from './Profile'
import ProfileClass from './ProfileClass'
import {Component}  from 'react'

// const About = () =>{

//     return (
        
//         <>
//         <Profile name="gauravfunction" addres="patna function"/>
//         <ProfileClass name="gauravclass" addres="patna class"/>
//         </>
//     )
// }



class About extends Component {
         constructor(){
            super();
         }
        componentDidMount(){
         
        }
        componenentDidUpdate(prevProps,prevState){

          

        }
        componentWillUnmount(){

        }
render() {
    return (
      <>
        <ProfileClass/>
       
      </>
    );
  }
}
export default About;