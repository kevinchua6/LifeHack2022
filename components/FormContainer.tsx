import React from 'react'
import PostalCodeTextField from "./PostalCodeTextField"
import MultipleSelectChip from "./MultipleSelectChip"
import SubmitButton from "./SubmitButton"

function FormContainer() {
  return (
    <div>
        <PostalCodeTextField />
        <MultipleSelectChip />
        <SubmitButton />
    </div>
  )
}

export default FormContainer