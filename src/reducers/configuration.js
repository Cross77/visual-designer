const configuration = (state = [], action) => {
    switch(action.type){
        case 'SET_SIZE':
            return Object.assign({}, state, {
                Size: {
                    Width: action.Width,
                    Height: action.Height
                }
            });
            break;
        case 'SET_DISPLAY':
            return Object.assign({}, state, {
                Display: {
                    BackgroundColor: action.BackgroundColor,
                    Border: action.Border
                }
            });
            break;
        case 'SET_COLOR':
            return Object.assign({}, state, {
                Display: {
                    BackgroundColor: '#aaa'
                }
            });
            break;
        default:
            return state;
    }
}


export default configuration;