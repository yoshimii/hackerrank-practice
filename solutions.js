function sockMerchant(n, ar) {

    let pairs = 0;
    
        const colors = ar.reduce((acc, val) => {
            //if key value exists, increment, else initialize key value with 1
            (!!acc[val])? acc[val] += 1 : acc[val] = 1
            console.log(acc)
            return acc;
        }, {})
        console.log(colors)
        Object.keys(colors).forEach(c=> {//for each key
            let _p = parseInt(colors[c]/2)//divide the value by 2 to make pairs and use parseInt to remove decimal values (single socks)
            if( _p >=1 ) {//if pairs exist
                pairs+=_p//store them in pairs variable
            }
        })
        console.log(pairs)//15
        return pairs;//return all pairs
    }
    let n = 35;
    let ar = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50]
    sockMerchant(n, ar )