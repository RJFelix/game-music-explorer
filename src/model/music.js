const initialState = {
    url: null,
}

export default (state = initialState, {type, data}) => {
    switch(type) {
        case 'PLAY_TRACK': {
            console.log(`Playing url ${data.url}`);
            return {
                ...state,
                url: data.url,
            };
        }
        default: {
            return state;
        }
    }
}