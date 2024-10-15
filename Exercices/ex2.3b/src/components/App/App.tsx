import Personne from "../Personne";
import FooterText from "../Footer"; 
import Header from "../Header";

const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;
  const footerText = "© 2023 My App";




  return (
   /* <div>
      <h1>{title}</h1>
      <div>
        <h2>{name1}</h2>
        <p>Age: {age1}</p>
      </div>
      <div>
        <h2>{name2}</h2>
        <p>Age: {age2}</p>
      </div>
      <div>
        <h2>{name3}</h2>
        <p>Age: {age3}</p>
      </div>
      <footer>{footerText}</footer>
    </div>*/
<div>
 
 <Header title={title}   />
  <Personne name= {name1} age={age1}/>
  <Personne name= {name2} age={age2}/>
  <Personne name= {name3} age={age3}/>
 <FooterText footer={footerText}/>

  </div>
  );

};

export default App;
