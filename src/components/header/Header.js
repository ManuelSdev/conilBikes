
import Box from '@mui/system/Box'
import Image from 'next/image'
import IconCorpName from '../elements/IconCorpName'
import Link from '../elements/Link'
import a from './../../assets/images/corpName.svg'
//import CorpName from "./../../assets/images/corpName.svg"
import B from '../../../public/correcto.svg'
//import bb from "./../../../public/corpName.svg"

import BlackToolbar from './BlackToolbar'
import { AppBar } from '@mui/material'
import IconLogo from '@components/elements/IconLogo'
//import IconLogo from '@components/elements/IconLogo'

/**
 * https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react
 * cambiar la propiedad de relleno, debe establecer el valor de su SVG fillpara currentque pueda usarlo así:
 * <svg fill="current" stroke="current" ....> ... </svg>
 */

const Header = () => {

    const f = '../../../public/vercel.svg'
    const n = 'vaca.jpg'

    return (
        <AppBar className='appBar' position="sticky"
        // sx={{ marginBottom: 0 }}
        >
            {/**
              <BlackToolbar className='blackToolBar' />
             */}

            <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}
            >
                <B
                //  style={'color:red'}
                // fill='blue'
                //    stroke='white'
                //color='red'

                //viewBox="0 0 110 90"
                //style={{ isolation: 'auto', color: 'green', fill: 'yellow' }}
                //    style={{ stroke: 'blue !important', fill: 'red', color: 'red !important' }}

                />
            </Box>





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


             /////BUENA
                       <Link href='/'>
                <Image

                    src="/corpName.svg"
                    alt="Corporation main logo"
                    width={650}
                    height={100}
                // layout='fill'
                />
            </Link>
 */