import React,{useContext, UserContext} from 'react'
import UserContext from '../utils/UserContext'
const CompoC = () => {
 const user = useContext(UserContext);
    return (
        <div style={{
            border:"2px solid black",
            borderRadius: "4px",
            width:"100vm",
            display:"flex",
            justifyContent:"center"
        }}>
            <h1>{user?.name}</h1>
            {/* <h1>{user?.email}</h1> */}
           

        </div>
    )
}
export default CompoC