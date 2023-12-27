import { Users } from "../store/global.store";
import IconLinkedin from "../assets/UilLinkedin.svg"
import IconGithub from '../assets/AkarIconsGithubFill.svg'
import IconBackend from '../assets/FluentServerLink20Filled.svg'
import IconFrontend from '../assets/MdiLinkVariant.svg'
import { Link } from "react-router-dom";

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
      <div className="bg-[#4D4D50] mt-4 mb-4 grid grid-cols-1 xl:grid-cols-3 gap-4 p-4 rounded-md shadow-lg">

        {/* Div 1: Imagen */}
        <div className="flex justify-center items-center">
          <img
            src={firstUserImage}
            alt="User"
            className="rounded-md"
          />
        </div>
        {/* Div 2: Sobre Mi */}
        <div className="md:col-span-2 grid grid-rows-[auto,1fr,auto] h-full">
          {/* Titulo */}
          <div className="py-1 row-span-1">
            <h1 className="text-4xl text-[#e7e9ec] font-extrabold text-center p5">
              {firstUserFullName}
            </h1>
          </div>

          {/* Descripcion*/}
          <div className="row-span-1 p-5">
            <p className="h-full text-[#e7e9ec]">
              {firstUser?.aboutMe}
            </p>
          </div>

          {/* Boton y Redes */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 row-span-1 p-4">
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#00AA4D] text-[#e7e9ec] p-4 rounded-md" >Contáctame</button>
            </div>
            <div className="flex justify-center lg:justify-end items-center gap-2">
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/jhony-saenz-hurtado" target='_blank' rel='noopener noreferrer' className="mr-2 mt-3">
                <img src={IconLinkedin} alt="Linkedin" className='w-10 h-10' />
              </a>
              {/* Github */}
              <a href="https://github.com/jasaenzh" target='_blank' rel='noopener noreferrer'>
                <img src={IconGithub} alt="Github" className='w-10 h-10 mt-3' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estudios Habilidades y Experiencia */}
      <div className="mt-4 grid grid-cols-1 xl:grid-cols-3 gap-4 w-full">
        {/* Estudios y Habilidades */}
        <div className="grid grid-cols-1 border-[#4D4D50] shadow-2xl gap-3">
          {/* Habilidades */}
          <div className="border-2 border-[#4D4D50] rounded-md">
            <h1 className="bg-[#4D4D50] text-2xl text-[#e7e9ec] font-extrabold text-center p-5">Habilidades</h1>
            <div className="">
              <ul className="p-4 text-[#4D4D50]">
                {firstUser?.Skills.map((skill, index) => (
                  <li className="flex items-center justify-between" key={index}>
                    <span className="text-xl">{skill.nameSkill}</span>
                    <img className="w-10 h-10 m-1" src={skill.image} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Estudios */}
          <div className="border-2 border-[#4D4D50] rounded-md">
            <h1 className="bg-[#4D4D50] text-2xl text-[#e7e9ec] font-extrabold text-center p-5">Estudios</h1>
            <div className="">
              <ul className="p-4 text-[#4D4D50]">
                <li className="grid grid-cols-2 gap-2">
                  <span>Institución educativa</span> <span>Universidad de Politecnico</span>
                  <span>Título</span> <span>Ingeniería en Sistemas</span>
                  <p>2020 - 2024</p>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Experiencia */}
        <div className="md:col-span-2 h-full border-2 border-[#4D4D50] rounded-md">
          <h1 className="bg-[#4D4D50] text-2xl text-[#e7e9ec] font-extrabold text-center p-5">Experiencias</h1>
          <div className="p-2">
            <ul className="">
              {firstUser?.Experiences.slice(0, 3).map((experience, index) => (
                <li className="p-6 text-[#4D4D50] grid gap-2" key={index}>
                  <h1 className="text-xl text-[#4D4D50] font-extrabold">{experience.position}</h1>
                  <h3>{experience.company}</h3>
                  <p>{experience.startDate} - {experience.currently === false ? experience.endDate : "Actualmente"}</p>
                  <p>{experience.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/experiencias" className="m-6 p-3 bg-[#00AA4D] text-[#e7e9ec] rounded-md inline-block">
            Ver mas...
          </Link>

        </div>

      </div>

      {/* Proyectos */}
      <div className="border-2 border-[#4D4D50] mt-4 mb-4 grid grid-cols-1 h-full rounded-md shadow-xl">
        <div>
          <h1 className="bg-[#4D4D50] text-2xl text-[#e7e9ec] font-extrabold text-center p-5">Proyectos</h1>
          <div className="grid grid-cols-1 text-[#e7e9ec] md:grid-cols-2 lg:grid-cols-3 m-4 gap-4">
            {
              firstUser?.Projects.slice(0, 3).map((project, index) => (
                <div key={index} className="border-2 border-[#4D4D50] rounded-md shadow-xl">

                  {/* Carrusel de imagenes */}
                  {
                    project.images?.map((image, indexImg) => (
                      <img className="h-20 w-20 p-4 m-2" key={indexImg} src={image} alt="" />
                    ))
                  }

                  <div className="bg-[#4D4D50]">
                    {/* Nombre y descripcion del proyecto */}
                    <div className="grid gap-2 p-5">
                      <h1 className="text-xl font-bold">{project.projectName}</h1>
                      <p className="text-sm">{project.description}</p>
                    </div>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 row-span-1 p-4">
                      <div className="flex justify-center md:justify-start">
                        <button className="p-3 bg-[#00AA4D] text-[#e7e9ec] rounded-md inline-block" >Detalles</button>
                      </div>

                      {/* Boton y Links */}
                      <div className="flex justify-center lg:justify-end items-center gap-2">
                        {/* Backend */}
                        <a href={project.urlBackend} target='_blank' rel='noopener noreferrer'>
                          <img src={IconBackend} alt="Backend" className='w-10 h-10 m-2' />
                        </a>

                        {/* Frontend */}
                        <a href={project.urlFrontend} target='_blank' rel='noopener noreferrer' className="mr-2">
                          <img src={IconFrontend} alt="Frontend" className='w-10 h-10 m-2' />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
          <Link to="/proyectos" className="m-6 p-3 bg-[#00AA4D] text-[#e7e9ec] rounded-md inline-block">
            Ver mas...
          </Link>
        </div>
      </div>

    </div>
  );
}

export { Home };

