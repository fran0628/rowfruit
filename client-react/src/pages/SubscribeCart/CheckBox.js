import React from 'react'

function CheckBox(props) {
  const { value, checkedValue, setCheckedValue } = props

  return (
    <>
      <input
        class="form-check-input" 
        id="checkboxNoLabel"
        type="checkbox"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
      />
      <label class="labelbox">{value}</label><br/>
    </>
  )
}

export default CheckBox
