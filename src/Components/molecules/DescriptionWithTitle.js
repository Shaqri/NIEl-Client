import Title from '../atoms/Title';
import Description from '../atoms/Description';

function DescriptionWithTitle({title, description, styleClass}) {
  return(
    <div className={`${styleClass}`}>
      <Title text={title}/>
      <Description text={description}/>
    </div>
  )
};

export default DescriptionWithTitle;