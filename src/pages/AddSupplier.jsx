import React from 'react'
import SupplierForm from '../components/supplier-form'
import { Box } from '@material-ui/core'
import { SupplierFormContextProvider } from '../contexts/supplier-form/SupplierFormContext'

export default function AddSupplier() {
    return (
        <Box width="100%">
            <h2>Supplier Creation Page</h2>
            <SupplierFormContextProvider>  
                <SupplierForm />
            </SupplierFormContextProvider>
        </Box>
    )
}
