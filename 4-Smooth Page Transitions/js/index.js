/*
 * @Date: 2022-01-24 17:03:00
 * @LastEditors: GC
 * @LastEditTime: 2022-01-24 21:02:16
 * @FilePath: \Projects\4-Smooth Page Transitions\js\index.js
 */
import Highway from "@dogstudio/highway";
import Fade from "./transition";

// This is just a way that we need to use to execute everything we have, like transitions, routers and so on.
const H = new Highway.Core({
    transitions: {
        default: Fade
    }

});