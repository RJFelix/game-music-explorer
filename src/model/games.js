const initialState = [
    {
        title: 'Skyrim',
        description: 'replaying this right now',
        publisher: 'publisher',
        year: '2013',
        tracks: [
            {
                title: 'Dragonborn (Title)',
                url: 'https://soundcloud.com/giammarco-simonelli/the-elder-scrolls-v-skyrim',
                active: false,
            },
            {
                title: 'Dragon Fight',
                url: 'https://soundcloud.com/haltorf/skyrim-dragon-fight-music',
                active: false,
            },
            {
                title: 'Sovngarde',
                url: 'https://soundcloud.com/samadra/skyrim-sovngarde-song',
                active: false,
            },
        ],
    },
    {
        title: 'Grand Theft Auto: Vice City',
        description: 'pretty fun',
        publisher: 'publisher',
        year: '2009',
        tracks: [
            {
                title: 'Theme',
                url: 'https://soundcloud.com/ewerton-barboza/grand-theft-auto-vice-city',
                active: false,
            },
            {
                title: 'Fever 105',
                url: 'https://soundcloud.com/furtheram-7/grand-theft-auto-gta-vice',
                active: false,
            },
            {
                title: 'Flash FM',
                url: 'https://soundcloud.com/furtheram-6/grand-theft-auto-gta-vice-city',
                active: false,
            },
            {
                title: 'Wildstyle Pirate Radio',
                url: 'https://soundcloud.com/furtheram-5/grand-theft-auto-gta-vice-city',
                active: false,
            },
            {
                title: 'Wave 103',
                url: 'https://soundcloud.com/theo-tis/grand-theft-auto-vice-city-wave-103',
                active: false,
            },
        ],
    },
    {
        title: 'Deus Ex',
        description: 'best game ever',
        publisher: 'publisher',
        year: '1997',
        tracks: [
            {
                title: 'Title',
                url: 'https://soundcloud.com/deus-ex-ost/title',
                active: false,
            },
            {
                title: 'New York City - Streets',
                url: 'https://soundcloud.com/deus-ex-ost/new-york-city-streets',
                active: false,
            },
            {
                title: 'New York City - Underworld',
                url: 'https://soundcloud.com/deus-ex-ost/new-york-city-underworld',
                active: false,
            },
            {
                title: 'Hong Kong - Streets',
                url: 'https://soundcloud.com/deus-ex-ost/hong-kong-streets',
                active: false,
            },
            {
                title: 'Paris - Cathedral',
                url: 'https://soundcloud.com/deus-ex-ost/paris-cathedral-catacombs',
                active: false,
            },
            {
                title: 'Ending - Chaos',
                url: 'https://soundcloud.com/deus-ex-ost/ending-chaos',
                active: false,
            },
            {
                title: 'Ending - Illuminati',
                url: 'https://soundcloud.com/deus-ex-ost/ending-illuminati',
                active: false,
            },
            {
                title: 'Ending - Helios',
                url: 'https://soundcloud.com/deus-ex-ost/ending-helios',
                active: false,
            },
        ],
    },
];

export const playTrack = ({ game, index, url }) => ({
    type: 'PLAY_TRACK',
    data: ({
        game,
        index,
        url,
    })
})

export const playNextTrack = () => ({
    type: 'PLAY_NEXT_TRACK',
})

export default (state = initialState, {type, data}) => {
  switch(type) {
    case 'PLAY_TRACK': {
      return state.map(g => {
        if(g.title === data.game) {
          return {
            ...g,
            tracks: g.tracks.map((t, idx) => ({...t, active: idx === data.index }))
          }
        }
        return g;
      });
    }
    case 'PLAY_NEXT_TRACK': {
      const currentGame = state.find(g => g.tracks.some(t => t.active));
      const currentTrackIdx = currentGame.tracks.findIndex(t => t.active);
      let nextTrackIdx = 0;
      if(currentTrackIdx + 1 < currentGame.tracks.length) {
        nextTrackIdx = currentTrackIdx + 1;
      }
      const nextTracks = [...currentGame.tracks];
      nextTracks[currentTrackIdx].active = false;
      nextTracks[nextTrackIdx].active = true;
      return [
        ...state,
        { ...currentGame,
          tracks: nextTracks,
        }
      ]
    }
    default: {
      return state;
    }
  }
}