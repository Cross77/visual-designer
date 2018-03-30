import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ComponentList from '../components/ComponentList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


export default getVisibleTodos
/*
const mapStateToProps = state => ({
  components: getVisibleTodos(state.components, state.visibilityFilter)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentList)*/