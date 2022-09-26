import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import BikesStep from './BikesStep';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import ContactStep from './ContactStep';
import ResumeStep from './ResumeStep';
import { useSelector } from 'react-redux';
import { getNumberOfBikes, getDate, getContactInfo } from '../../app/store/selectors';
import DateSelect from './DateSelect';
import DateStep from './DateStep';
import { Container } from '@mui/system';
import compareAsc from "date-fns/compareAsc";
const steps = [
    'Fecha',
    'Bicicletas',
    'Contacto',
    'Resumen',
];

export default function BookingStepper() {
    const isoDate = useSelector(getDate)
    const amount = useSelector(getNumberOfBikes)
    const contactInfo = useSelector(getContactInfo)
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                :
                activeStep + 1;
        setActiveStep(newActiveStep);
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    const handleBack = () => {
        activeStep > 0 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const dateIsValid = () => (isoDate.from && isoDate.to) ? true : false
    const contactInfoIsValid = () => contactInfo.every(elem => !!elem)
    console.log(contactInfoIsValid())


    const StepWrapper = ({ children, textHeader }) =>
        <Box>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h5" component="div">
                {textHeader}
            </Typography>
            <Paper
                elevation={1}
                p={1}
                component={Stack}
                sx={{ width: '100%' }}
            // mb={5}
            //  spacing={1}
            >
                {children}
            </Paper>

        </Box>

    return (
        <Stack id='bookingStepper' spacing={2}>
            <Box pt={2} pb={2} sx={{ width: '100%', background: "#009CAC" }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box mb={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1, marginTop: '30px' }}>


                {activeStep === 0 ?
                    <StepWrapper textHeader={'Selecciona la fecha'}> <DateSelect /></StepWrapper>

                    :
                    activeStep === 1 ?
                        <StepWrapper textHeader={'Elige las bicicletas'}><BikesStep /></StepWrapper>

                        :
                        activeStep === 2 ?
                            <StepWrapper textHeader={'Indica tus datos de contacto'}>   <ContactStep /></StepWrapper>

                            :
                            <StepWrapper textHeader={'Resumen de tu reserva'}> <ResumeStep /></StepWrapper>


                }



            </Box >
            {
                activeStep === 0 ?
                    <Button
                        disabled={!dateIsValid()}
                        onClick={handleNext}>Continuar</Button>
                    :
                    activeStep === 1 ?
                        <Box  >
                            <Button sx={{ mb: 2 }}
                                disabled={!!!amount}
                                fullWidth onClick={handleNext}>Continuar</Button>
                            <Button onClick={handleBack}>Atras</Button>
                        </Box>
                        :
                        activeStep === 2 ?
                            <Box  >
                                <Button sx={{ mb: 2 }}
                                    disabled={!contactInfoIsValid()}
                                    fullWidth onClick={handleNext}>Continuar</Button>
                                <Button onClick={handleBack}>Atras</Button>
                            </Box>
                            :
                            <Box >
                                <Button sx={{ mb: 2 }} fullWidth >Confirmar reserva</Button>
                                <Button onClick={handleBack} >Atras</Button>
                            </Box>

            }



        </Stack >



    );
}