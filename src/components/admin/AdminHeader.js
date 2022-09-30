


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

const AdminHeader = () => {

    return (
        <AppBar className='appBar' position="sticky"
        // sx={{ marginBottom: 7 }}
        >

            <WhiteToolBar></WhiteToolBar>
        </AppBar >




    )
}

export default AdminHeader


