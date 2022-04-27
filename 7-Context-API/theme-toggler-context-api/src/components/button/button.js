import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"

export const Button = (props) => {
  
  const {theme} = useContext(ThemeContext)
  console.log('button theme', theme )
  
  return (
    <button {...props} 
    
    style={{ color: theme.color, backgroundColor: theme.background}}
    />
  )
}