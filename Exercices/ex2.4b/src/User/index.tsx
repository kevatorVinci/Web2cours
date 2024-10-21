import "./user.css"

interface UserProps{
    nom:string
    age:number
    online:boolean
}

const User =(props:UserProps) => {
    return (
        <div className="user-card" style={{color : props.online ? "green" : "red"}}>
            <h1>{props.nom}</h1>
            <p>Age : {props.age}</p>
           
            <p className={props.online ? 'online' : 'offline'}>
            Etat : {props.online ? 'Oui' : 'Non'}
        </p>
        </div>
    )

}
export default User;