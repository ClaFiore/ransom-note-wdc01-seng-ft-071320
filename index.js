let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
    "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
    
let ransomNote = "hereisat"
    
    
function canBuildNote(ransomNote, magazine) {
    const buildHistogram = {}
    for (let char of magazine){
        if (buildHistogram[char] > 0){
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