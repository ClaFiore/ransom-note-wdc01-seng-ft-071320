let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
    "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
    
let ransomNote = "hereisat"
    
    
function canBuildNote(ransomNote, magazine) {
    let magazine = magazine.replace(/\s/g,'').toLowerCase().split("")  //magazine is now an array, without spaces, only lowercase letters
    let ransomNote = ransomNote.replace(/\s/g,'').toLowerCase().split("") //same for the note
    if (ransomNote.length > magazine.length){   //eliminate edge case where there aren't enough letters in the magazine
        return false}

    const buildHistogram = {}

    //for(let char of magazine){
    //  char in buildHistogram ? buildhistogram[char] += 1 : buildHistogram[char] = 1
    for (let char of magazine){
        if (buildHistogram[char] > 0){   //could build this also with ternary operator
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




let canMakeNote = (source, note) => {
    let boolean = false

    let cleanedSource = clean(source)
    let cleanedNote = clean(note)

    if (cleanedSource.length >= cleanedNote.length){
        let sourceHistogram = makeHistogram(source)
        let noteHistogram = makeHistogram(cleanedNote)
        for(let letter in noteHistogram){
            if (sourceHistogram[letter] && sourceHistogram[letter] >= noteHistogram[letter]){
                boolean = true
            }else{
                boolean = false 
                break
            }
        }
    }
    return boolean
}