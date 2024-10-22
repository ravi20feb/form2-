const arr = [0,2,3];
let str = ""
function checkSign(n){
    for(let i = 0 ; i< n.length; i++){
        if(n[i]>0){
            str+="+"
        }
            else if(n[i] === 0 ){
                console.log("0 is neither  + nor  -")
            }
        
        else 
        str+="-"
    }
    return str

}

checkSign(arr);
console.log(str)