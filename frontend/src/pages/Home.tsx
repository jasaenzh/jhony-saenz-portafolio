interface HomeProps {
  menuOpen: boolean;
}

function Home({ menuOpen }: HomeProps) {

  const marginTopClass = menuOpen ? 'mt-24 md:mt-2' : 'mt-0';

  return (
    <div className={`text-2xl font-bold ${marginTopClass}`}>
      Este es el Home
    </div>
  );
}

export { Home };

