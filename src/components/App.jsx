import CardTeams from "./CardTeams";

function App() {

  const teamsPage = [
    {
      titulo: "The creative crew",
      subtitulo: "Who we are",
      texto:
        "We are team of creatively diverse. driven. innovative individuals working in various locations from the world.",

      miembros: [
        {
          id: 1,
          nombre: "Bill Mahoney",
          cargo: "Product Owner",
          foto: "/images/photo1.png",
        },
        {
          id: 2,
          nombre: "Saba Cabrera",
          cargo: "Art Director",
          foto: "/images/photo2.png",
        },
        {
          id: 3,
          nombre: "Shae Le",
          cargo: "Tech Lead",
          foto: "/images/photo3.png",
        },
        {
          id: 4,
          nombre: "Skylah Lu",
          cargo: "UX Designer",
          foto: "/images/photo4.png",
        },
        {
          id: 5,
          nombre: "Griff Richards",
          cargo: "Developer",
          foto: "/images/photo5.png",
        },
        {
          id: 6,
          nombre: "Stan John",
          cargo: "Developer",
          foto: "/images/photo6.png",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        {teamsPage.map((individualPerson) => (
          <CardTeams 
          key = {individualPerson.id}
          teamsRoles = {individualPerson}
          />
        ))}
      </div>
    </>
  );
}

export default App;
