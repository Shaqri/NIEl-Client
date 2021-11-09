import Image from '../atoms/Image';
import Title from '../atoms/Title';
import {Link} from 'react-router-dom';

function Card(props) {
  const {image, icon, titleText, description,
    preDescription, footer, styleClass, wrapperLink} = props;
  return (
    <li className={`card ${styleClass}`}>
       <Link to={wrapperLink}>
        {image &&
            <Image path={image} />
          }
          {icon &&
            <i className={`${icon} icon`} />
          }
          <div className="details">
            <Title text={titleText}/>
            {preDescription &&
              preDescription
            }
            {description  &&
              description
            }

            {footer &&
              footer
            }
          </div>
       </Link>
    </li>
  )
}

export default Card;