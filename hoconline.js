document.getElementById('button').addEventListener('click', click)
function click() {
    let a = document.getElementById("cc").value;
    let b = document.getElementById("cn").value;
    let c = (b/(a*a));
    if (c<18.5){
        alert('Gầy')
    }
    else if (18.5<=c && c<=24.9){
        alert('Bình thường')
    }
    else if (25<=c && c<=29.9){
        alert('Tiền béo phì')
    }
    else if (30<=c && c<=34.9){
        alert('Béo phì độ 1')
    }
    else if (35<=c && c<=39.9){
        alert('Béo phì độ 2')
    }
    else {
        alert('Béo phì độ 3')
    }
}