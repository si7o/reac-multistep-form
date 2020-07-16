import TYPES from "./types"
import initialContextStore from "./initialContextStore"

export const supplierFormReducer = (store, action) => {
    switch (action.type) {
        case TYPES.SAVE_STEP_1:
            return {
                ...store,
                step: 2,
                formData: action.values
            }

        case TYPES.SAVE_STEP_2:
            return {
                ...store,
                formData: action.values
            }
        
        case TYPES.PREVIOUS_STEP: {
            return {
                ...store,
                step: store.step-1,
            }
        }
            
        case TYPES.SUBMIT:
            return {
                ...store,
                isSubmitting: true,
            }

        case TYPES.SUBMITTED: {
            return {
                ...store,
                step: 3,
                isSubmitting: action.isSubmitting,
            }
        }

        case TYPES.RESET: {
            return initialContextStore   
        }

        default:
            return store
    }
}