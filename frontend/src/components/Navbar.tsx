import { useEffect, useState } from "react"
import { globalStore } from "../store/global.store";
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';

interface Link {
  name: string;
  link: string;
}

interface NavbarProps {
  menuOpen: boolean;
}


function Navbar({ menuOpen }: NavbarProps) {

  const { setMenuOpen } = globalStore();

  const { isAuthenticated, users } = globalStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    users: state.users
  }))

  console.log("MENU OPEN NAVBAR", menuOpen);
  console.log(users);


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
      console.log("Esta Autenticado");
    } else {
      console.log("No esta Autenticado");
      setLinksToShow(LinksUser)
    }
  }, [isAuthenticated])

  return (
    <nav className="fixed w-full z30 top-0 bg-[#4D4D50] shadow-md left-0 py-3 text-[#e7e9ec]">
      {/* Icono de Menu Hamburgesa */}
      <div onClick={toggleMenu} className='text-2xl absolute right-6 top-1 cursor-pointer md:hidden text-[#00AA4D] border border-solid border-[#00AA4D] rounded-md pt-2 pl-2 pr-2 pb-1'>
        <IonIcon icon={open ? `${close}` : `${menu}`} />
      </div>

      {/* Lista de enlaces */}
      <div className="md:py-1 py-4 sm:px-8">
        <ul
          className={`md:flex gap-16 justify-end md:items-center md:pb-0 pb-2 absolute md:static md:z-auto left-0 w-full md:pl-0 pl-6 transition-all duration-0 ease-in
            ${open
              ? 'top-16 opacity-100 font-bold text-xl'
              : 'top-[-490px] text-2xl font-bold '
            }`
          }
          onClick={closeMenu}
        >
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