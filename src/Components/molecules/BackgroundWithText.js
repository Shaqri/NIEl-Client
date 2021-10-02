import BackgroundImage from '../atoms/BackgroundImage';
import AbsoluteCenter from '../atoms/AbsoluteCenter';
import Shade from '../atoms/Shade';

function BackgroundWithText({image, text, styleClass, withShade}) {
  return(
    <div className={`background-with-text ${styleClass}`}>
      <BackgroundImage path={image} />

      <AbsoluteCenter content={text} />

      {withShade && 
        <Shade/>
      }
    </div>
  );
}

export default BackgroundWithText;