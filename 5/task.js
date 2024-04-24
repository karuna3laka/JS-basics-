//area of triangle

function tarea (a,b){
    let base=a;
    let hight = b ;
    let area = (base*hight)/3
    return area;
}

const call = tarea(10,10);
console.log(call);