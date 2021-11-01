import Image from '../atoms/Image';
import DescriptionWithTitle from './DescriptionWithTitle';
import Title from '../atoms/Title';
import Description from '../atoms/Description';

function Card(props) {
  const {image, icon, titleText, descriptionText,
    preDescription, footer, styleClass} = props;
  return (
    <li className={`card ${styleClass}`}>
        {image &&
          <Image path={image} />
        }
        {icon &&
          <i className={`${icon} icon`} />
        }
        <Title text={titleText}/>
        {preDescription &&
          preDescription
        }
        <Description text={descriptionText}/>

        {footer &&
          footer
        }

    </li>
  )
}

export default Card;