import { Users } from "../store/global.store";

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
      <div className="bg-[#e7e9ec] mt-4 h-60 grid grid-cols-1 md:grid-cols-3">
        <div className="bg-[#e7e9ec] flex items-center justify-center w-auto md:w-[100%]">
          <img src={firstUserImage} alt="User" className="rounded-lg" />
        </div>
        <div className="bg-[#e7e9ec] w-full md:col-span-2">

          <div className="grid grid-cols-1 gap-6 flex-1 bg-[#e7e9ec] h-full justify-center items-center">
            <h1 className="text-4xl font-extrabold bg-[#e7e9ec] text-center">
              {firstUserFullName}
            </h1>
            <p>{firstUser?.aboutMe}</p>
            <button className="bg-blue-500 text-white h-5/6 px-4 rounded-md">Contactame</button>
          </div>


        </div>
      </div>
    </div>
  );
}

export { Home };

