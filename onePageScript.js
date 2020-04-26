function toLanding(){
  window.location.href = "landing.html";
}
function addOne(){
  console.log("in function");
  document.getElementById("gridsId").innerHTML += `
  <div class="one_grid">
    <div>Bachelor of East Asian Studies</div>
    <div>UM</div>
    <span><a href="www.google.com">Uni Malaya</a></span>
    <span>KL</span>
    <span>Rank : <span>70</span></span>
    <span>Minimum CGPA : <span>2.5</span></span>
  </div>`
}