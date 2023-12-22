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


    </div>
  );
}

export { Home };

