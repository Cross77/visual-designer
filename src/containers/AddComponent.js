import React from 'react'
import { connect } from 'react-redux'
import { addComponent } from '../actions'

const AddCompoennt = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(AddComponent(input.value, 'NONE'))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Component
        </button>
      </form>
    </div>
  )
}

export default connect()(AddCompoennt)
