


/**
 * https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react
 * cambiar la propiedad de relleno, debe establecer el valor de su SVG fillpara currentque pueda usarlo así:
 * <svg fill="current" stroke="current" ....> ... </svg>
 */

import { AppBar } from "@mui/material"
import Image from "next/image"
import Link from "../elements/Link"
import BlackToolbar from "../header/BlackToolbar"
import WhiteToolBar from "../header/WhiteToolBar"

const Header = () => {

    return (
        <AppBar className='appBar' position="sticky" sx={{ marginBottom: 7 }} >

            <WhiteToolBar></WhiteToolBar>
        </AppBar>




    )
}

export default Header


/**
 *     <IconCorpName width='200' viewBox="0 0 100 100" > </IconCorpName>
 *   <img src='corpName.svg' alt="aaaa" />
 *         <Image
                src={reactLogo}
                alt="dddd main logo"
                width={500}
                height={500}
            //layout='fill'
            />
   <CorpName
                // width='200'
                //viewBox="0 0 200 200"
                fill='red'
                //style={{ fill: "#FFFFFF" }}
                // sx={{ style: { fill: "#FFFFFF" }, height: "100%", fontSize: 100 }}
                sx={{
                    // height: "100%",
                    fontSize: 100
                }}
            />

            <Image
                src={bas}
                alt="Corporation main logo"
                //   width={500}
                //  height={500}
                layout='fill'
            />
             <img src={n} alt='dsjlhdlhls' />
 */