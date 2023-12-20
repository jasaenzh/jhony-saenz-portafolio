import IconLinkedin from "../assets/UilLinkedin.svg"
import IconGithub from '../assets/AkarIconsGithubFill.svg'

const Footer = () => {
  return (
    <footer className="bg-[#e7e9ec] text-[#e7e9ec] flex w-full z-30 shadow-lg">

      <div className='flex flex-1 items-center justify-center'>
        <div className='w-full  px-4 mx-auto text-center'>
          <p className='text-sm text-[#00AA4D] font-semibold py-1'>
            Copyright © <span>2023 Jhony Saenz</span>
          </p>
        </div>
      </div>


      <div className="flex gap-3 w-2/12 items-center justify-center pr-3 m-2">

        {/* Linkedin */}
        <a href="https://www.linkedin.com/in/jhony-saenz-hurtado" target='_blank' rel='noopener noreferrer'>
          <img src={IconLinkedin} alt="Linkedin" className='w-10 h-10' />
        </a>

        {/* Github */}
        <a href="https://github.com/jasaenzh" target='_blank' rel='noopener noreferrer'>
          <img src={IconGithub} alt="Linkedin" className='w-10 h-10' />
        </a>

      </div>

    </footer>
  );
};

export { Footer };