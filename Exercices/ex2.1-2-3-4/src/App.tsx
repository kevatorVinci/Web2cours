  
interface Movie {
  title:string;
  director:string;
 }
 
 interface Cinema {
   name:string;
   movie1:Movie;
   movie2:Movie;
 }
 
 interface PageTitleProps {
   title: string;
 }
 
 const App = () => {
 
 
    const pageTitle = "Informations sur les films dans les cinémas";
 
   const cinema1Name = "UGC DeBrouckère";
 
   const movie1 :Movie= {
     title: "HAIKYU-THE DUMPSTER BATTLE",
     director: "Susumu Mitsunaka",
   };
   const movie2 :Movie= {
     title: "GOODBYE JULIA ",
     director: "Mohamed Kordofani",
   };
 
   const cinema2Name = "UGC Toison d'Or";
   const movie3 :Movie= {
     title: "THE WATCHERS",
     director: "Ishana Night Shyamalan",
   };
   const movie4:Movie = {
     title: "BAD BOYS: RIDE OR DIE",
     director: "Adil El Arbi, Bilall Fallah",
   };
 
 
 
   return (
     <div>
       
       <PageTitle title={pageTitle} />
 
       <Cinema name={cinema1Name} movie1={movie1} movie2={movie2} />
       <Cinema name={cinema2Name} movie1={movie3} movie2={movie4} />
     </div>
   );
   };
 
 const PageTitle = (props: PageTitleProps) => {
   return <h1>{props.title}</h1>;
 };
 
 const Cinema = (props:Cinema ) => (
   <div>
     <h2>{props.name}</h2>
     <p>Film 1: {props.movie1.title} - Réalisateur: {props.movie1.director}</p>
     <p>Film 2: {props.movie2.title} - Réalisateur: {props.movie2.director}</p>
   </div>
 );
 
 export default App;