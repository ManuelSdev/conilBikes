import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DateBikeStep from './DateBikesStep';
import { Button, Grid } from '@mui/material';
import DetailsStep from './DetailsStep';
import ResumeStep from './ResumeStep';

const steps = [
    'Fecha y bicicletas',
    'Detalles de la reserva',
    'Resumen',
];

export default function BookingStepper() {
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
    const handleBack = () => {
        activeStep > 0 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <>
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
                <Grid container item xs={12} sm={12} md={8} lg={8} >
                    {activeStep === 0 ?
                        <DateBikeStep />
                        :
                        activeStep === 1 ?
                            <DetailsStep />
                            :
                            <ResumeStep />

                    }
                </Grid>
                <Button onClick={handleNext}>Continuar</Button>
            </Box >
        </>

    );
}