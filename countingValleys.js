function countingValleys(n, s) {
    let valleys = 0;
    let _sum = 0;
    let isInValley = false;//accounts for getting back to zero but still in a valley
    s = s.split(""); //string array
    
    const vals= s.map(i => i === "U" ? 1 : -1)//make summable numbers out of string chars
        for( let i in vals) {
            _sum += vals[i]//store sum of + and -, 0 denotes sealevel 
    
            if( _sum < 0 && !isInValley) {//checks if isInValley is false in a truthy way
                console.log(!isInValley)//true means yes, it is set to false
                isInValley = true;//set to true
                console.log(_sum)
            }
            if ( _sum == 0 && isInValley) {
                console.log(isInValley)//true, means yes we were just in a valley
                valleys++//
                console.log(valleys)
                isInValley = false;//reset to false cause we've reached 0 from inside a valley
            }
        }
        console.log(valleys)//2
        return valleys;
    }
let n = 12;
let s = "DDUUDDUDUUUD"
countingValleys(n,s)