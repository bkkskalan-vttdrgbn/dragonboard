/**
 * ==========================================================
 * DragonBoard Runtime State
 * ==========================================================
 * Stores the current application state.
 * Never store DOM elements here.
 */

export const GameState = {

    application: {

        ready: false,

        currentScreen: "splash"

    },

    runtime: {

        campaign: null,

        currentMap: null,

        selectedToken: null,

        round: 0

    },

    camera: {

        zoom: 1,

        x: 0,

        y: 0

    }

};
