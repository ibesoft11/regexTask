function validateColor(htmlColorCode){
    var regEx = new RegExp("[#][0-9A-F]{3,8}$","gim");
    return console.log(regEx.test(htmlColorCode));
}

function printNames(text){
    var names = [];
    names = text.match(/["][a-zA-Z]+\s?\w+\s?\w*["]/g);
    return console.log("Names = ", names);
}

function generateLink(text){
    var regEx = new RegExp("((https?|ftps?)://(www)?([a-zA-Z0-9-_]+\.[a-z]{2,6}))","gim");
    ntext = text.replace(regEx, "<a href='$1'>$4</a>");
    return console.log(ntext);   
    
}
let text = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`;
let linkText = "Visit http://genesystechhub.com for more information about Genesys or meet with us at ftps://backend.ng";
printNames(text);
validateColor("#AACCFF");
generateLink(linkText);