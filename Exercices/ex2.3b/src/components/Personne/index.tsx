
interface PersonneProps {
    name: string;
    age: number;
}

const Personne = (props: PersonneProps) => (
   <div>
    <p>nom - {props.name}  {props.age} -age</p>
   </div>
);

export default Personne ;
