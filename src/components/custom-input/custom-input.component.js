const CustomInput = props => (
  <input 
    type='text' 
    value={props.value} 
    disabled={props.isDisabled}
  />
);

export default CustomInput;