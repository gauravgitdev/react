import { useRouteError } from "react-router-dom"    

 export const Error = () =>{
    const error=useRouteError();
    return(
        <div>
            <h1>Opps!</h1>
            <h2>something went wrong</h2>
            <h2>{error.status}-{error.statusText}</h2>
             <h2>{error.data}</h2>
        </div>
    )
}
