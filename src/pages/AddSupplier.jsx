import React from 'react'
import SupplierForm from 'components/supplier-form'
import { Box } from '@material-ui/core'
import { SupplierFormContextProvider } from 'contexts/supplier-form/SupplierFormContext'
import SupplierFormSidebar from 'components/supplier-form/SupplierFormSidebar'
import SideBar from 'components/commons/side-bar/SideBar'

export default function AddSupplier() {
    return (
        <>
            <SupplierFormContextProvider> 
                <Box className="sidebar">
                    <SideBar>
                        <SupplierFormSidebar />
                    </SideBar>
                </Box>
                <Box width="100%">
                    <h2>Supplier Creation Page</h2>                    
                        <SupplierForm />
                </Box>
            </SupplierFormContextProvider>
        </>
    )
}
