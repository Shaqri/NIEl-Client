import logo from '../../images/logo.png';

function Brand({styleClass}) {
  return(
    <img className={styleClass} src={logo} />
  );
};

export default Brand;