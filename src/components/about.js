import Profile from './Profile'
import ProfileClass from './ProfileClass'
import {component}  from 'react'

// const About = () =>{

//     return (
        
//         <>
//         <Profile name="gauravfunction" addres="patna function"/>
//         <ProfileClass name="gauravclass" addres="patna class"/>
//         </>
//     )
// }



class About extends component {
         constructor(){
            super();
         }
        componentDidMount(){
            
        }

         return(){
           <>
           <ProfileClass name="gauravclass" addres="patna class"/>
           <ProfileClass name="gauravclass" addres="patna class"/>
           </>
         }
}
export default About;