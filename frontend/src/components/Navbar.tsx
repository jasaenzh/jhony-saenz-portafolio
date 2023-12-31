import { useEffect, useState } from "react"
import { globalStore } from "../store/global.store";
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';

interface Link {
  name: string;
  link: string;
}


function Navbar() {

  const { setMenuOpen } = globalStore();

  const { isAuthenticated, } = globalStore((state) => ({
    isAuthenticated: state.isAuthenticated,
  }))


  const [open, setOpen] = useState(false);
  const [linksToShow, setLinksToShow] = useState<Link[]>([]);


  const toggleMenu = () => {
    setOpen(!open);
    setMenuOpen(!open)
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
    } else {
      setLinksToShow(LinksUser)
    }
  }, [isAuthenticated])

  return (
    <nav className="fixed w-full z30 top-0 text-[#e7e9ec] bg-[#4D4D50] shadow-lg left-0 py-3 flex justify-center items-center">
      {/* Icono de Menu Hamburgesa */}
      <div onClick={toggleMenu} className='text-2xl absolute right-6 top-2 cursor-pointer md:hidden text-[#00AA4D] font-semibold border-2 border-solid border-[#00AA4D] rounded-md pt-2 pl-2 pr-2 pb-1'>
        <IonIcon icon={open ? `${close}` : `${menu}`} />
      </div>

      {/* Lista de enlaces */}
      <div className="md:py-1 py-5 sm:px-8 w-5/6">
        <ul
          className={`md:flex gap-16 justify-end md:items-center md:pb-0 pb-2 absolute md:static md:z-auto left-0 w-full pl-6 md:pl-0 transition-all duration-0 ease-in
            ${open
              ? 'top-16 opacity-100 font-bold text-xl text-[#4D4D50]'
              : 'top-[-490px] text-2xl font-bold '
            }`
          }
          onClick={closeMenu}
        >
          {linksToShow.map((link, index) => {
            return (
              <li key={index}>
                <a key={link.name} href={link.link} >
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