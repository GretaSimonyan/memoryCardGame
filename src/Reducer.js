const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLAYERS_VALUE':
            return {
                ...state,
                plValue: action.plValue
            };
        case 'SET_WIDTH':
            return {
                ...state,
                width: action.width
            };
        case 'SET_HEIGHT':
            return {
                ...state,
                height: action.height
            };
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                current: action.current
            };
        case 'SET_PLAY':
            return {
                ...state,
                play: action.play
            };
        // case 'REMOVE':
        //     return {
        //         ...state,
        //         posts: state.posts.filter(post => post.id !== action.payload)
        //     };
        // case 'SET_ERROR':
        //     return {
        //         ...state,
        //         error: action.payload
        //     };
        default:
            return state;
    }
};

export default Reducer;