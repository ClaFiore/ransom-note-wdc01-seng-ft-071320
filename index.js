let mag = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
    "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
    
let note = "hereisat"
    
    
function canBuildNote(note, mag) {
    let magazine = mag.replace(/\s/g,'').toLowerCase().split("")  //magazine is now an array, without spaces, only lowercase letters
    let ransomNote = note.replace(/\s/g,'').toLowerCase().split("") //same for the note
    if (ransomNote.length > magazine.length){   //eliminate edge case where there aren't enough letters in the magazine
        return false}

    const buildHistogram = {}

    for (let char of magazine){
        if (buildHistogram[char] > 0){   //could build this with ternary operator at the bottom
            buildHistogram[char]++
        }else{
            buildHistogram[char] = 1
        }
    }
    for (let char of ransomNote){
        if (buildHistogram[char] >= 1){
            buildHistogram[char]--
        }else{
            return false
        }
    }

    return true
}

 // for(let char of magazine){
//  char in buildHistogram ? buildhistogram[char] += 1 : buildHistogram[char] = 1


