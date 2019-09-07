var names = ["Yaakov", "John", "joe","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(var i=0;i< names.length;i++){
    if (names[i].charAt(0)=="j"){
        console.log("goodbye"+" "+names[i]);
    }
    else if(names[i].charAt(0)=="J"){
        console.log("goodbye"+" "+names[i]);
    }
    else {
        console.log("hello"+" "+names[i]);
    }
}
  
