import React, { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'

import { SupplierFormContext } from 'contexts/supplier-form/SupplierFormContext'
import TYPES from 'contexts/supplier-form/types'
import { Grid, Button, Box, CircularProgress } from '@material-ui/core'

export default function SupplierCompany() {
    const {store, dispatch} = useContext(SupplierFormContext)

    const validationSchema = Yup.object({                    
        companyName: Yup.string()
            .required(),
        contactName: Yup.string()
            .required(),
        contactPhone: Yup.string()
            .required(),    
    })

    const handleSubmit = (values, {isSubmitting}) => {
        dispatch({type: TYPES.SAVE_STEP_2, values})
        dispatch({type: TYPES.SUBMIT})
        
        setTimeout(() => {
            dispatch({type: TYPES.SUBMITTED})
        }, 1000);
    }

    const handlePreviousClick = () => {
        dispatch({type: TYPES.PREVIOUS_STEP})
    }

    return (
        <Formik
            initialValues={{...store.formData}}
            onSubmit={handleSubmit}            
            validationSchema={validationSchema}
        >
            {({isSubmitting}) => (
            <Form>
                <Grid container spacing={3} justify="space-between">
                    <Grid item xs={12}>
                        <Field component={TextField} name="companyName" label="Company Name" fullWidth={true}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Field component={TextField} name="contactName" label="Contact Name" fullWidth={true}/>
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="contactPhone" label="Contact Phone" fullWidth={true}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className="action-buttons">                            
                            <Button 
                                type="submit" 
                                color="primary" 
                                disabled={isSubmitting || store.isSubmitting}
                                startIcon={store.isSubmitting && <CircularProgress size={20}/>}
                            >
                                Submit 
                            </Button>
                            <Button 
                                onClick={handlePreviousClick} 
                                disabled={isSubmitting || store.isSubmitting}
                            >
                                Previous
                            </Button>
                        </Box>
                    </Grid>
                </Grid>    
            </Form>
            )}
        </Formik>             
    )
}
