function Footer({text, styleClass}) {
  return(
    <p className={`footer ${styleClass}`}>
      {text}
    </p>
  )
};

export default Footer;