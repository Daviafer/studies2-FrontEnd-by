import { useContext } from "react"
import { ThemeContext, themes } from "../../context/theme-context"
import { Button } from "../button/button"

export const ThemeToggleButton = () => {

    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div>
      <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> Clique aqui </Button>
    </div>
  )
}