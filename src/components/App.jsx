import React from "react";
import emojipedia from "./emojipedia"

// var numbers = [3, 56, 2, 48, 5];
function meaning(emojiMeaning){
    emojiMeaning=emojipedia.meaning
    return(
        emojiMeaning.substring(0,101)
    )
};


function Emojis (){
    return(
        <div>
            {emojipedia.map(meaning)}
        </div>
    )
}

export default Emojis;
