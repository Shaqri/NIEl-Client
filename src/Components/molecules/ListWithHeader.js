import TitleHeader from '../atoms/TitleHeader';

function ListWithHeader ({header, children, styleClass, headerClass}) {
  return(
    <div className={`l-list-with-header ${styleClass}`}>
      <TitleHeader text={header} styleClass={headerClass} />
      <ul className="list">
        {children}
      </ul>
    </div>
  );
}

export default ListWithHeader;