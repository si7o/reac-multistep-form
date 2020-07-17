import React, { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'

import { SupplierFormContext } from 'contexts/supplier-form/SupplierFormContext'
import TYPES from 'contexts/supplier-form/types'
import { Grid, Button, Box } from '@material-ui/core'
import CustomInputText from 'components/commons/forms/CustomInputText'

export default function SupplierInfo() {
    const {store, dispatch} = useContext(SupplierFormContext)

    const validationSchema = Yup.object({
        name: Yup.string()
            .required(),
        country: Yup.string()
            .required(),
        postalCode: Yup.string()
            .required(),
        city: Yup.string()
            .required(), 
    })

    const handleSubmit = (values, {isSubmitting}) => {
        dispatch({type: TYPES.SAVE_STEP_1, values})
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
                        <CustomInputText name="name" label="Supplier Name" required/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} name="country" label="Country" fullWidth={true}/>
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="city" label="City" fullWidth={true}/>
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="postalCode" label="Postal Code" fullWidth={true} />
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="city2" label="City" fullWidth={true} />
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="branch" label="Branch" fullWidth={true}/>
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="streetAddress" label="Street Address" fullWidth={true}/>
                    </Grid>                    
                    <Grid item xs={6}>
                        <Field component={TextField} name="billingAddress" label="Billing Address" fullWidth={true}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Box className="action-buttons">
                            <Button type="submit" color="primary" disabled={isSubmitting}>
                                Next 
                            </Button>
                        </Box>
                    </Grid>
                </Grid>    
            </Form>
            )}
        </Formik>             
    )
}
