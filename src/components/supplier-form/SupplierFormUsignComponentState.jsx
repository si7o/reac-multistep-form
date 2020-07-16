import React, { useContext, useState } from 'react'
import { Button, Grid, CircularProgress, } from '@material-ui/core';

import './SupplierForm.scss'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from "yup";

export default function SupplierFormUsignComponentState() { 
    const stepsCount = 2;

    const [stepsData, setStepData] = useState({})
    const [currentStep, setCurrentStep] = useState(0)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const initialValues = {
        name:'',
        country: '',
        postalCode: '',
        city: '',
        city2: '',
        branch: '',
        streetAddress: '',
        billingAddress: '',
        companyName:'',
        contactName: '',
        contactPhone: '',
    }

    const validationSchema = () => {
        switch (currentStep) {
            case 0:
                return Yup.object({
                    name: Yup.string()
                        .required(),
                    country: Yup.string()
                        .required(),
                    postalCode: Yup.string()
                        .required(),
                    city: Yup.string()
                        .required(), 
                })
            case 1:
                return Yup.object({                    
                    companyName: Yup.string()
                        .required(),
                    contactName: Yup.string()
                        .required(),
                    contactPhone: Yup.string()
                        .required(),    
                })
        }
    } 

    const isLastStep = () => currentStep === stepsCount-1
    const isFirstStep = () => currentStep === 0

    const handleSubmit = (values,{setSubmitting}) => {
        setStepData(values)        

        if (isLastStep())
        {
            setTimeout(() => {
                setSubmitting(false)
                setIsFormSubmitted(true)
                setCurrentStep(currentStep + 1)
            }, 1000)
        } else {
            setCurrentStep(currentStep+1)
            setSubmitting(false)
        }
    }

    const resetForm = () => {
        setCurrentStep(0)
        setIsFormSubmitted(false)
        setStepData({})
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <>
                        <Grid item xs={12}>
                            <Field component={TextField}
                                name="name"
                                label="Supplier Name"
                                variant="outlined"
                                fullWidth={true}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field component={TextField} 
                                    name="country"
                                    label="Country *"
                                    variant="outlined"
                                    fullWidth={true}/>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Field component={TextField} 
                                    name="city" 
                                    label="City"
                                    variant="outlined"
                                    fullWidth={true}/>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Field component={TextField} 
                                    name="postalCode"
                                    label="Postal Code"
                                    variant="outlined"
                                    fullWidth={true} />
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Field component={TextField} 
                                    name="city2" 
                                    label="City"
                                    variant="outlined"
                                    fullWidth={true} />
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Field component={TextField} 
                                    name="branch" 
                                    label="Branch" 
                                    variant="outlined"
                                    fullWidth={true}/>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Field component={TextField}
                                    name="streetAddress" 
                                    label="Street Address" 
                                    variant="outlined"
                                    fullWidth={true}/>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Field component={TextField}
                                    name="billingAddress" 
                                    label="Billing Address"
                                    variant="outlined"
                                    fullWidth={true}/>
                            </Grid>
                        </>
                )
            case 1:
                return (
                    <>
                        <Grid item xs={12}>
                            <Field component={TextField}
                                name="companyName"
                                label="Company Name"
                                variant="outlined"
                                required
                                fullWidth={true}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Field component={TextField} 
                                name="contactName"
                                label="Contact Name"
                                variant="outlined"
                                fullWidth={true}/>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Field component={TextField} 
                                name="contactPhone" 
                                label="Contact Phone"
                                variant="outlined"
                                fullWidth={true}/>
                        </Grid>    
                    </>
                )
            default:
                return ( 
                    <Grid item xs={12}>
                        <pre>
                            {JSON.stringify(stepsData, null, 2)}
                        </pre>
                    </Grid>
                )
        }
    }

    const previousStepButton = (isSubmitting) => ( 
        <Button onClick={() => setCurrentStep(currentStep-1)} disabled={isSubmitting}>
            Previous
        </Button>
    )
    const nextStepButton = (isSubmitting) => (
        <Button  
            type="submit"
            color="primary"
            disabled={isSubmitting}            
            startIcon={isSubmitting && <CircularProgress size={20}/>}
        >
            { isLastStep() ? 'Submit' : 'Next' } 
        </Button>
    )
    const restFormButton = (
        <Button onClick={resetForm}>
            Reset
        </Button>
    )
    
    return (
        <Formik
            initialValues={{...initialValues}}
            onSubmit={handleSubmit}            
            validationSchema={validationSchema}
        >
            {({isSubmitting}) => (
            <Form>
                <Grid container spacing={3} justify="space-between">

                    {renderStep()}

                    <Grid item xs={12} spacing={3}>
                        { !isFirstStep() && !isFormSubmitted && previousStepButton(isSubmitting)}
                        { !isFormSubmitted && nextStepButton(isSubmitting)}
                        { isFormSubmitted && restFormButton}
                    </Grid>  
                </Grid>    
            </Form>
            )}
        </Formik> 
    )       
}
