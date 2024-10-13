const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <h1>PageTitle title={pageTitle}</h1>

      <div>
        <PageTitle title={pageTitle} />
        
        <Cinema
          name={cinema1Name}
          cinema1Movie1Title={cinema1Movie1Title}
          cinema1Movie1Director={cinema1Movie1Director}  {/* Corrected here */}
          cinema1Movie2Title={cinema1Movie2Title}
          cinema1Movie2Director={cinema1Movie2Director}
        />

        <Cinema
          name={cinema2Name}
          cinema2Movie1Title={cinema2Movie1Title}
          cinema2Movie1Director={cinema2Movie1Director}
          cinema2Movie2Title={cinema2Movie2Title}
          cinema2Movie2Director={cinema2Movie2Director}
        />
        <strong>{cinema1Movie1Title}</strong> - Réalisateur :{" "}
        {cinema1Movie1Director}
        <strong>{cinema1Movie2Title}</strong> - Réalisateur :{" "}
        {cinema1Movie2Director}
      </div>
    </div>
  );
};

export default App;