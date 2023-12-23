import { Users } from "../store/global.store";
import IconLinkedin from "../assets/UilLinkedin.svg"
import IconGithub from '../assets/AkarIconsGithubFill.svg'

interface HomeProps {
  menuOpen: boolean;
  users: Users[]
}

function Home({ menuOpen, users }: HomeProps) {

  const marginTopClass = menuOpen ? 'mt-24 md:mt-2' : 'mt-0';

  const firstUser = users.length > 0 ? users[0] : null;

  const firstUserImage = users.length > 0 ? users[0].image : '';

  const firstUserName = firstUser ?
    firstUser.secondName ?
      `${firstUser.firstName} ${firstUser.secondName} ${firstUser.lastName}`
      : `${firstUser.firstName} ${firstUser.lastName}`
    : '';

  const firstUserFullName = firstUser ?
    firstUser.secondName && firstUser.secondLastName ?
      `${firstUser.firstName} ${firstUser.secondName} ${firstUser.lastName} ${firstUser.secondLastName}`
      : firstUserName
    : '';


  return (
    <div className={`${marginTopClass}`}>

      {/* Encabezado */}
      <div className="bg-green-800 mt-4 grid grid-cols-1 xl:grid-cols-3 gap-4 p-4">

        {/* Div 1: Imagen */}
        <div className="bg-orange-400 flex justify-center items-center">
          <img
            src={firstUserImage}
            alt="User"
            className="rounded-md"
          />
        </div>

        {/* Div 2: Sobre Mi */}
        <div className="bg-purple-400 md:col-span-2 grid grid-rows-[auto,1fr,auto] h-full">

          {/* Titulo */}
          <div className="py-1 row-span-1">
            <h1 className="text-4xl font-extrabold text-center p5">
              {firstUserFullName}
            </h1>
          </div>

          {/* Descripcion*/}
          <div className="bg-rose-400 row-span-1 p-5">
            <p className="bg-slate-200 h-full">
              {firstUser?.aboutMe}
            </p>
          </div>

          {/* Boton y Redes */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 bg-slate-600 row-span-1 p-5">
            <div className="bg-blue-400 flex justify-center md:justify-start">
              <button className="bg-violet-400 p-4 rounded-md" >Contáctame</button>
            </div>
            <div className="bg-blue-950 flex justify-center lg:justify-end items-center gap-2">
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/jhony-saenz-hurtado" target='_blank' rel='noopener noreferrer' className="mr-2">
                <img src={IconLinkedin} alt="Linkedin" className='w-10 h-10' />
              </a>

              {/* Github */}
              <a href="https://github.com/jasaenzh" target='_blank' rel='noopener noreferrer'>
                <img src={IconGithub} alt="Github" className='w-10 h-10' />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Estudios Habilidades y Experiencia */}
      <div className="bg-green-800 mt-4 grid grid-cols-1 xl:grid-cols-3 gap-4 p-4 w-full">

        {/* Estudios y Habilidades */}
        <div className="bg-blue-200 grid grid-cols-1">
          {/* Habilidades */}
          <div className="bg-amber-300">
            <h1 className="text-2xl font-extrabold text-center p5">
              Habilidades
            </h1>
            <div className="bg-slate-400">
              <ul className="bg-lime-200 p-4">
                {firstUser?.Skills.map((skill, index) => (
                  <li className="bg-purple-300 flex items-center justify-between" key={index}>
                    <span className="text-xl">{skill.nameSkill}</span>
                    <img className="w-10 h-10 m-1" src={skill.image} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Estudios */}
          <div className="bg-teal-500">
            <h1 className="text-2xl font-extrabold text-center p5">
              Educación
            </h1>
            <div className="bg-slate-400">
              <ul className="bg-orange-200 p-4">
                <li className="grid grid-cols-2 bg-slate-300">
                  <span>Institución educativa</span> <span>Universidad de Politecnico</span>
                  <span>Título</span> <span>Ingeniería en Sistemas</span>
                  <p>2020 - 2024</p>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Experiencia */}
        <div className="bg-rose-300 md:col-span-2 h-full">
          <h1 className="text-2xl font-extrabold text-center p5">
            Experiencias
          </h1>
          <div className="bg-slate-400 p-4 mt-2">
            <ul className="bg-red-300">
              {firstUser?.Experiences.map((experience, index) => (
                <li className="bg-slate-300 p-4" key={index}>
                  <h1 className="text-xl font-bold">{experience.position}</h1>
                  <h3>{experience.company}</h3>
                  <p>{experience.startDate} - {experience.currently === false ? experience.endDate : "Actualmente"}</p>
                  <p>{experience.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

export { Home };

