const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLAYERS_VALUE':
            return {
                ...state,
                plValue: action.plValue
            };
        case 'SET_Width':
            return {
                ...state,
                width: action.width
            };
        case 'SET_Height':
            return {
                ...state,
                height: action.height
            };
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                current: action.current
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