function Card({title, description, styleClass, icon }) {
  return(
    <li className={`card ${styleClass}`}>
      <i class={`${icon} icon`} />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </li>
  );
}

export default Card;