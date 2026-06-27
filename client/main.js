/**
 * ==========================================================
 * DragonBoard Entry Point
 * ==========================================================
 */

import { initializeApplication } from "./core/app.js";

function bootstrapApplication() {

    initializeApplication();

}

document.addEventListener("DOMContentLoaded", bootstrapApplication);
