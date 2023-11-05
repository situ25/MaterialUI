import { PaletteColor, ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
   
    interface Theme{   // used in the Component(our case MuiResponsiveness.tsx)
        status:{
            danger: string
        }
    }
   
    interface ThemeOptions{
        status:{
            danger: React.CSSProperties['color']
        }
    }


    interface Palette{
        neutral?: PaletteColor
    }

    interface PaletteOptions{
        neutral?: PalleteColorOptions
    }

    interface SimplePaletteColorOptions{
        darker?: string
    }
    interface PaletteColor{
        darker?: string
    }
}