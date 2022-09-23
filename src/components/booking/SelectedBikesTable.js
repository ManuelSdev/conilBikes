import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from "next/image"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/HighlightOffOutlined';
import Link from '../elements/Link'


//import DirectProductAmountButton from './DirectProductAmountButton';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getBikes } from '../../app/store/selectors';

const divStyle = {
    backgroundColor: 'red',
};

const SelectedBikesTable = () => {
    const selectedBikes = useSelector(getBikes)
    return (

        <TableContainer component={Paper}>
            <Typography p={2} variant='h6' sx={{ fontWeight: 'bold' }} >
                Detalles de la reserva
            </Typography>
            <Table aria-label="collapsible table">

                <TableBody>
                    {selectedBikes.map((bike) => {
                        const [image] = bike.images
                        return <>
                            <TableRow
                                key={bike._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell rowSpan={2} component="th" scope="row">
                                    { /*<Link href={`/product/${bike.url}`}>*/}
                                    <Link href={`/}`}>
                                        <Image
                                            width='100%'
                                            height='100%'
                                            objectFit='contain'
                                            src={image}
                                            alt="Imagen de producto"

                                            style={{ backgroundColor: '#F1F1F1' }}
                                        />
                                    </Link>
                                </TableCell>
                                <TableCell
                                    sx={{ '&.MuiTableCell-root': { borderBottom: '0px solid red', paddingBottom: 0 } }}
                                    colSpan={4}>
                                    <Typography>{bike.brand}</Typography>

                                    <Typography>{bike.model}</Typography>
                                </TableCell>


                            </TableRow>
                            <TableRow>
                                {/*    <TableCell align="right">
                                    {  <DirectProductAmountButton product={product} />}

                                </TableCell>*/}
                                <TableCell align="right">
                                    {/*{Math.round(bike.price * bike.amount * 100) / 100} €*/}
                                    20€/día
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        // onClick={handleDelete(product)}
                                        color="primary" aria-label="upload picture" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </>





                    })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default SelectedBikesTable