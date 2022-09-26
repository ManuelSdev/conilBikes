import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { getBikes } from '../../app/store/selectors';

import PedalBikeIcon from '@mui/icons-material/PedalBike';


export default function SelectedBikesList() {
    const [secondary, setSecondary] = React.useState(false);
    const bikes = useSelector(getBikes)
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>


            <List sx={{ pb: 0, mb: 0 }} dense>
                {bikes.map(bike =>
                    <ListItem
                        disablePadding
                        key={bike._id}
                        //  alignItems="flex-start"
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemIcon>
                            <PedalBikeIcon fontSize='large' />
                        </ListItemIcon>

                        <ListItemText
                            primary={`${bike.brand} ${bike.model}`}
                            secondary={`${bike.type} - ${bike.range === 'premium' ? '' : 'gama'} ${bike.range} - ${bike.price}€/día`}



                        />
                    </ListItem>
                )}


            </List>
        </Box>
    );
}
