function domainName(url){
    //your code here
    var string = removeHeadersAndWWW(url);
    return string.slice((0), string.indexOf('.'));
    function removeHeadersAndWWW(string){
        if(string.match('http://')){
            var splitStr = string.split('http://');
            splitStr.splice(0,1);
            if(splitStr[0].match('www.')){
                splitStr[0] = splitStr[0].replace('www.','');
                return splitStr[0];
            }
            return splitStr[0];
        } else if(string.match('https://')){
            var splitStr = string.split('https://');
            splitStr.splice(0,1);
            if(splitStr[0].match('www.')){
                splitStr[0] = splitStr[0].replace('www.','');
                return splitStr[0];
            }
            return splitStr[0];
        } else if(string.match('www.')){
            return string.replace('www.','');
        } else return string;
    }
}
