import React, { useContext } from 'react'
import { Grid, Button, Box, Paper } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { SupplierFormContext } from '../../contexts/supplier-form/SupplierFormContext'
import TYPES from '../../contexts/supplier-form/types'

export default function Confirmation() {
    const {store, dispatch} = useContext(SupplierFormContext)

    const resetForm = () => {
        dispatch({type: TYPES.RESET})
    }

    return (
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12}>
                <Alert severity="success">Form submitted</Alert>
                <Paper>
                    <pre>
                        {JSON.stringify(store.formData, null, 2)}
                    </pre>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Box className="action-buttons">
                    <Button onClick={resetForm}>
                        Ok
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
