import './styles/index.css';

const LearningTypeDropdown = ({dropdownArray = [], onChange, value, placeholder, name = 'learnType'}) => {
  
  return (
    <select className="learn-type-container" onChange={onChange} name={name} value={value || placeholder}>
      {placeholder && <option disabled>{placeholder}</option>}
      {dropdownArray.map(type => <option key={type} value={type} className="learn-type">{type}</option>)}
    </select>
  )
};

export default LearningTypeDropdown;