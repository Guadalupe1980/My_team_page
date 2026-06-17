function CardTeams({ teamsRoles }) {
  return (
    <section className="max-w-4xl mx-auto p-4 font-sans">
      <div className="flex justify-end mb-2 pr-4 md:pr-0">
        <button className="cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 md:w-14 md:h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 xl:text-xl gap-6 items-start mb-12 ">
        <h1 className="text-4xl xl:text-4xl font-bold font-serif text-gray-900 tracking-tight">
          {teamsRoles.titulo}
        </h1>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wide text-gray-800 pl-8">
            {teamsRoles.subtitulo}
          </span>
          <p className="text-gray-900 max-w-md pl-8 md:text-xl">
            {teamsRoles.texto}
          </p>
        </div>
      </article>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-10">
        {teamsRoles.miembros.map((miembro, indice) => (
          <article
            key={indice}
            className={`flex flex-col

              ${indice % 2 !== 0 ? "translate-y-15 md:translate-y-0" : ""}
              ${indice === 1 || indice === 4 ? "md:translate-y-24" : ""}
            `}
          >
            <figure className="flex items-start m-0">
              <div className=" overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={miembro.foto}
                  alt={miembro.nombre}
                />
              </div>
              <figcaption className="text-[12px] md:text-xs  tracking-wide uppercase font-semibold font-sans text-gray-950 [writing-mode:vertical-lr] whitespace-nowrap">
                {miembro.cargo}
              </figcaption>
            </figure>

            <h3 className="font-bold text-xl text-gray-900 md:text-base m-0">
              {miembro.nombre}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CardTeams;
