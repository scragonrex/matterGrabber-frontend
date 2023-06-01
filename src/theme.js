import { Palette } from "@mui/icons-material"

export const themeSetting = (mode)=>{
    return {
        palette:{
            mode:mode,
            ...(mode==="dark"
            ?
            {
                primary:{main:"#fff"},
                background:{default:"#fff", alt:"#007fff"}
            }
            :
            {
                primary:{main:"#000000"},
                background:{default:"#fff",
                alt:"#155be2"}
            }
            )
        }
    }
}