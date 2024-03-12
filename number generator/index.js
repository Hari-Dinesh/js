function generate() {
  let number = Math.floor(Math.random() * 100);
  document.getElementById("num").innerText = number;
  console.log(number);
}
function caliculate() {
  let amount = parseInt(document.getElementById("tip").value);
  console.log(amount);
  let tip = amount / 10;
  document.getElementById("amou").innerText = tip;
}
function set(){
    let all=document.getElementsByName('selopt')
    let modify=document.getElementById('modify')
    for(let i=0;i<all.length;i++){
        let val = all[i].value;
        let prop = all[i].getAttribute("id");
      modify.style[prop] = val;
    }
}
