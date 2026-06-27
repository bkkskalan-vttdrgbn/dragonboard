/**
 * ==========================================================
 * DragonBoard Application
 * ==========================================================
 */

import { Config } from "./config.js";
import { GameState } from "./state.js";

function initializeApplication() {

    console.log(`${Config.APP_NAME} ${Config.VERSION}`);

    GameState.application.ready = true;

    console.log("Application Ready");

}

export { initializeApplication };
