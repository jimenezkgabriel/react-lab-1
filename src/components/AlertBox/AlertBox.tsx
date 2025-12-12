import React from 'react';

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
            <Grid container justifyContent={'center'}>
                <Grid size={{ xs: 12, md: 6 }} >
                    <Alert variant='outlined' onClose={onClose} severity={type} sx={{ borderWidth: 3 }}>
                        <AlertTitle>{message}</AlertTitle>
                        {children}
                    </Alert>
                </Grid>
            </Grid>
        </>
    );
};