import { plusSlides, slideNumber } from "./carousel-main";

let startX;
let endX;

function getDirectionAndMove(event) {
    if (startX === undefined) {
        startX = event.clientX;
    } else {
        endX = event.clientX;

        /* Move left */
        if (endX > startX) { 
            slideNumber--;
        }
        /* Move right */ 
        else {
            slideNumber++;
        }
        /* Move to appropriate slide */
        plusSlides(slideNumber);
    }
}

document.querySelector("#projects").addEventListener("touchstart", getDirectionAndMove);
document.querySelector("#projects").addEventListener("touchend", getDirectionAndMove);
