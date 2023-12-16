import { useEffect, useState } from "react"
import { globalStore } from "../store/global.store";
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';

interface Link {
  name: string;
  link: string;
}


function Navbar() {

  const { isAuthenticated, users } = globalStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    users: state.users
  }))

  console.log("USERS", users);


  const [open, setOpen] = useState(false);
  const [linksToShow, setLinksToShow] = useState<Link[]>([]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {

    const LinksAdmin: Link[] = [
      {
        name: 'Inicio',
        link: "/"
      },
      {
        name: 'Administrar Proyectos',
        link: "/crear-proyecto"
      },
      {
        name: 'Administrar Experiencias',
        link: "/crear-proyecto"
      }
    ]

    const LinksUser: Link[] = [
      {
        name: "Inicio",
        link: "/"
      },
      {
        name: "Proyectos",
        link: "/proyectos"
      },
      {
        name: "Experiencias",
        link: "/experiencias"
      },
    ]

    if (isAuthenticated) {
      setLinksToShow(LinksAdmin)
      console.log("Esta Autenticado");
    } else {
      console.log("No esta Autenticado");
      setLinksToShow(LinksUser)
    }
  }, [isAuthenticated])

  return (
    <nav className="fixed w-full z30 top-0 bg-black shadow-md left-0 py-2 text-slate-50">
      <div className="bg-slate-400 flex md:flex justify-between items-center py-4 sm:px-8">

        <div onClick={toggleMenu} className='text-4xl absolute right-7 top-8 cursor-pointer md:hidden text-[#7B5640]'>
          <IonIcon icon={open ? `${close}` : `${menu}`} />
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`} onClick={closeMenu} >
          {linksToShow.map((link, index) => {
            return (
              <li key={index}>
                <a key={link.name} href={link.link}>
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )

}

export { Navbar }