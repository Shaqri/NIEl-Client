function SelectInput({countries}) {
  return(
    <select name='country' id='country'>
      {countries.map(country => country.name)}
    </select>
  );
};

export default SelectInput;