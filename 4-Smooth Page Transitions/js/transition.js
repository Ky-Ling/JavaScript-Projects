/*
 * @Date: 2022-01-24 20:46:18
 * @LastEditors: GC
 * @LastEditTime: 2022-01-24 21:10:16
 * @FilePath: \Projects\4-Smooth Page Transitions\js\transition.js
 */
import Highway from "@dogstudio/highway";
import {TimelineLite} from "gsap"; 

class Fade extends Highway.Transition {
    // The in function is gonna be the about page, so from the home page when we click on "about" button, the ones that is coming
    //      is the about page, and the one that is going out is home page(index.html)

    // "form" is for index.html, "to" is for about.html We have to call "done" function when we finish the transition.
    in({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to, 0.5, {left: "-100%", top: "50%"}, {left: "0%"}).fromTo(to, 0.5, {height: "2vh"}, {height: "90vh", top: "10%", onComplete: function() {
            // Remove the container we are in
            from.remove();
            done();
        }}).fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1});  
    };

    // 
    out({ from, done }) {
        done();
    };
}

export default Fade;