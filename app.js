function custumtrim(s){
    if(typeof(s)==="string" ){
        let str = ""
        for(let i=0;i<s.length;i++){
            if(s[i]!==' '){
              str +=s[i];
            }
          
        }
        return str;  
    }else{
        return "Only string type is valid"
    }
}
console.log(custumtrim("   hel   lo"));