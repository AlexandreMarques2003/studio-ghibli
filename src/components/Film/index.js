import { Link } from "react-router-dom";

import './styles.scss';

export function Film({id, image}){
    return(
        <article className="card">
        <Link to = {`film/${id}`}>
            <div className="card-image"><img src={image} /></div>       
         </Link>
         </article>        
    )
}