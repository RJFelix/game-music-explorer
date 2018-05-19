const initialState = {
    url: 'https://soundcloud.com/earlskiez/skyrim-theme-song-full',
}

export const setMusicUrl = url => ({
    type: 'SET_MUSIC_URL',
    data: {
        url,
    }
});

export default (state = initialState, {type, data}) => {
    switch(type) {
        case 'SET_MUSIC_URL': {
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