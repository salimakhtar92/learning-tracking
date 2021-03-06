import './styles/index.css';

const LearningTypeDropdown = ({dropdownArray = [], onChange, value, placeholder, name = 'learnType'}) => {
  
  return (
    <select 
      className={`learn-type-container ${!value && "placeholder-color"}`} 
      onChange={onChange} 
      value={value || placeholder}
      name={name}
    >
      {placeholder && <option disabled>{placeholder}</option>}
      {dropdownArray.map(type => <option key={type} value={type} className="learn-type">{type}</option>)}
    </select>
  )
};

export default LearningTypeDropdown;