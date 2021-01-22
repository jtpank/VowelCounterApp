//import in the model

exports.home = function(req, res) {
    res.render('splash', {output: ""})
}

exports.countChars = function(req, res) {
    let inputString = req.body.inputString
    let word1 = 'are'
    let word2 = 's'

    let i = 0
    let count = 0
    for(i = 0; i < inputString.length; i++)
    {
        if(inputString[i] == 'a' ||inputString[i] == 'e' || inputString[i] == 'i' || inputString[i] == 'o' || inputString[i] == 'u' ) 
        {
            count+=1
        }
    }
    if(count == 1) { 
        word1 = 'is'
        word2 = ''
    }
    let outputString = `There ${word1} ${count} vowel${word2} in ${inputString}`
    console.log(outputString)

    res.render('splash', {output: outputString})
}
