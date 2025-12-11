import React from 'react';
import Button from '@mui/material/Button';
import { Alert, AlertTitle } from '@mui/material';
import Grid from '@mui/material/Grid';
import type { AlertBoxProps } from '../../types';

export const AlertBox: React.FC<AlertBoxProps> = ({
    type,
    message,
    onClose,
    children
}) => {
    return (
        <>
            <Grid container direction="column" sx={{ justifyContent: "center", alignItems: "center", height: "100vh", gap: 2 }}>
                <Grid size={6}>
                    <Alert variant='outlined' onClose={onClose} severity={type} sx={{ borderWidth: 3 }}>
                        <AlertTitle>{message}</AlertTitle>
                        {children}
                    </Alert>
                </Grid>
            </Grid>
        </>
    );
};