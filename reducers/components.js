function components(state = [], action){
    switch(action.type){
        case 'ADD_COMPONENT':
            return [
                ...state,
                {
                    Name: action.name,
                    IsVisible: true,
                    IsLocked: false,
                    ParentId: 'ROOT',
                    Pos:{
                        X: 0,
                        Y: 0
                    },
                    Size:{
                        Width: 200,
                        Height: 200
                    },
                    Extra: {}
                }
            ]; 
            break;
        case 'REMOVE_COMPONENT':
            break;
        case 'HIDE_COMPONENT':
            return state.map((component, index) => {
                if( index === action.index){
                    return Object.assign({}, component, {
                        IsVisible: false
                    });
                }
            })
            break;
        case 'SHOW_COMPONENT':
            return state.map((component, index) => {
                if( index === action.index){
                    return Object.assign({}, component, {
                        IsVisible: true
                    });
                }
            })
            break;
        case 'LOCK_COMPONENT':
            break;
        case 'UNLOCK_COMPONENT':
            break;
        case 'SHOW_COMPONENT_PREVIEW':
            break;
        case 'HIDE_COMPONENT_PREVIEW':
            break;
        case 'CHANGE_GROUP':
            break;
        default:
            return state;
    }
}

export default components;