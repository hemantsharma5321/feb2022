var restoreString = function(s, indices) {
    s=s.split("");
     result=[];
    for(let i=0;i<indices.length;i++){
        result[indices[i]]=s[i];
    }
    return result.join("");
    
 };
