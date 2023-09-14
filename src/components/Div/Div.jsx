import { useContext } from "react";
import { ThemeContext } from "../../App";

function Div({children}) {
  
    const theme = useContext(ThemeContext);


    return (
      <div>
      Your theme is: {theme.themeValue}
      </div>
    );
  }
  
  export default Div;
  