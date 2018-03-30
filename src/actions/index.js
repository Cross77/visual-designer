let nextComponentId = 0
export const addTodo = function(name, type){
    return{
        type: 'ADD_COMPONENT',
        id: nextComponentId++,
        name: name,
        type: type
    }
}
/*
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}*/