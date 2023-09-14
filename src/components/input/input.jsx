
function Input(props) {
    const { setValue } = props;

    
    const handleChange = (event) => {
      
      setValue(event.target.value);
    };
  
    return (
      <input type="text" onInput={handleChange} />
    );
}


export default Input;
