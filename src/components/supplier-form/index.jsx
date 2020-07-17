import React, { useContext } from 'react'

import './SupplierForm.scss'
import { SupplierFormContext } from 'contexts/supplier-form/SupplierFormContext';
import SupplierInfo from './SupplierInfo';
import SupplierCompany from './SupplierCompany';
import Confirmation from './Confirmation';

export default function SupplierForm() { 
    const {store} = useContext(SupplierFormContext)    
    
    return (
        <>
            {store.step === 1 && <SupplierInfo />}
            {store.step === 2 && <SupplierCompany />}
            {store.step === 3 && <Confirmation />}
        </>
    )       
}
