
function Card(props) {
  const {title, description, styleClass, icon,
  preDescriptionTitle, preDescription, footer } = props;
  
  const formatDescription = (description) => {
    const splitDescription = description.split("|");
    return splitDescription.map((slice) => <span>{slice}</span>);
  };

  return(
    <li className={`card ${styleClass}`}>
      {icon &&
        <i className={`${icon} icon`} />
      }
      <h2 className="title">{title}</h2>
      {preDescription && 
        <div className="pre-description">
          <h3 className="title"><span>{preDescriptionTitle}</span></h3>
          <p className="description">{formatDescription(preDescription)}</p>
        </div>
      }
      <p className="description">{formatDescription(description)}</p>
      {footer && 
        <p className="footer">{footer}</p>
      }
    </li>
  );
}

export default Card;