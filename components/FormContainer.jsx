import React from 'react'
import PostalCodeTextField from "./PostalCodeTextField"
import MultipleSelectChip from "./MultipleSelectChip"
import SubmitButton from "./SubmitButton"

function FormContainer() {
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
        <PostalCodeTextField />
        <MultipleSelectChip />
        <SubmitButton />
    </div>
  )
}

export default FormContainer