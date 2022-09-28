import Toolbar from "@mui/material/Toolbar"
import React from "react";
import useBreakpoints from "../../hooks/useBreakpoints"
import { useDispatch, useSelector } from "react-redux"
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box } from "@mui/system";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { openDrawer } from "../../app/store/drawerSlice";
import { Button, IconButton } from "@mui/material";

const WhiteToolBar = ({ handleChangeCollapsed, categories }) => {

    const { md950Up, sm750Up } = useBreakpoints()

    const dispatch = useDispatch()

    const handleOpenDrawer = () => dispatch(openDrawer())

    return (

        <Toolbar
            //disableGutters={true}
            sx={{
                bgcolor: '#BFBFBF',
                justifyContent: 'space-between',
                height: "4em",
                // mb: '2em',
                alignItems: 'center',
                pl: 0.5,
                pr: 0
            }}
        >
            <Box
                sx={{
                    ml: 2,
                    //   width: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <IconButton onClick={handleOpenDrawer} >
                    <GridViewIcon />
                </IconButton>

            </Box>
            <Box
                sx={{
                    mr: 2,
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <CalendarMonthOutlinedIcon />
                <NotificationsNoneIcon />
                <LightModeOutlinedIcon />
                <PersonOutlineOutlinedIcon />
            </Box>

        </Toolbar >


    )
}

export default WhiteToolBar

/*
       {sm750Up && <SearchForm />}
                <HeaderButtonsPanel />
            </Toolbar >
            <NestedDrawer onClose={handleDrawer} categories={categories} />
            */