import { useContext } from "react";
import { ThemeContext } from "../../App";
import Button from "../Button/Button";

function DivwithButton({children}) {
  
    const setTheme = useContext(ThemeContext);

    function ChangeTheme(){

      

      setTheme.func( setTheme.themeValue === 'light' ? 'dark' : 'light');
      
      }
    return (
      <div>
      <Button ClickHandler={ChangeTheme} >Change Theme 2</Button>
      </div>
    );
  }
  
  export default DivwithButton;
  