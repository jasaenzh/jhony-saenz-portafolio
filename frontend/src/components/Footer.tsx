const Footer = () => {
  return (
    <div className="bg-dark text-light text-center barra-footer">
      <h5>&copy; Creado por Jhony Alberto Saenz Hurtado</h5>
      <p>2023 - {new Date().getFullYear()}</p>
    </div>
  );
};

export { Footer };