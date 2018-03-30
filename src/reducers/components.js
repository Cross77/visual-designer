const components = (state = [], action) => {
    switch(action.type){
        case 'ADD_COMPONENT':
            return [
                ...state,
                {
                    Name: action.name,
                    Type: action.type,
                    IsVisible: true,
                    IsLocked: false,
                    IsPreview: false,
                    ParentId: 'ROOT',
                    Id: action.id,
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
        case 'UPDATE_SIZE':
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
            return state.map((component, index) => {
                if( index === action.index){
                    return Object.assign({}, component, {
                        IsLocked: true
                    });
                }
            })
            break;
        case 'UNLOCK_COMPONENT':
            return state.map((component, index) => {
                if( index === action.index){
                    return Object.assign({}, component, {
                        IsLocked: false
                    });
                }
            })
            break;
        case 'ENABLE_COMPONENT_PREVIEW':
            return state.map((component, index) => {
                if( index === action.index){
                    return Object.assign({}, component, {
                        IsPreview: true
                    });
                }
            })
            break;
        case 'DISABLE_COMPONENT_PREVIEW':
            return state.map((component, index) => {
                if( index === action.index){
                    return Object.assign({}, component, {
                        IsPreview: false
                    });
                }
            })
            break;
        case 'GET_JSON':
            //chyba nie tu
            break;
        default:
            return state;
    }
}

export default components;