import React from 'react'
import { useField } from 'formik'
import { FormLabel, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    label: {
        color: theme.palette.black.main,
    },
    input: {
        paddingTop: '10px',
    },
}))

export default function CustomInputText({name, label, required}) {
    const [field, meta] = useField(name)
    const classes = useStyles()

    const comuptedLabel = label + (!!required && '*')

    return (
        <>
            <FormLabel htmlFor={name} className={classes.label}>{comuptedLabel}</FormLabel>
            <TextField
                className={classes.input}
                name={name}
                fullWidth={true}
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}                
                helperText={meta.touched && meta.error}
                error={meta.error}
                />
        </>
    )
}
