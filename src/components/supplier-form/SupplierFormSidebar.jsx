import React, { useContext } from 'react'

import './SupplierForm.scss'
import { SupplierFormContext } from 'contexts/supplier-form/SupplierFormContext';
import { List, ListSubheader, ListItem, Box } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

export default function SupplierFormSidebar() { 
    const {store} = useContext(SupplierFormContext)

    return (
        <Box className="sidebar">
            <List>
                <ListSubheader>Form steps</ListSubheader>
                <ListItem disabled={store.step < 1} alignItems="center">
                    Supplier info {(store.step > 1) && <DoneIcon color="primary"/>}
                </ListItem>
                <ListItem disabled={store.step < 2}>
                    Company info {(store.step > 2) && <DoneIcon color="primary"/>}
                </ListItem>
            </List>
        </Box>
    )       
}
