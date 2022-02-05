function addOrmul(op,a,b,...arr){
if(op=="+"){
    if(arr.length==0)
    return a+b;

    else{
        let sum=a+b;
        arr.forEach(element => {
        sum+=element;
        
        });
        return sum;
    }
    

}
if(op=='*'){
    if(arr.length==0){
        return a*b;
    }
    else if(arr.includes(0)){
        return 0;
    }

    else{
        let product=a*b;
        arr.forEach(element => {
            product*=element;
        });
        return product;
    }
}
}
