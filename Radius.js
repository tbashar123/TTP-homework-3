function volumeSphere(){
  var vol;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  vol = (4/3) * Math.PI * Math.pow(radius, 3);
  vol = vol.toFixed(4);
  document.getElementById('stay').innerHTML=vol;

 }



 document.getElementById("form").addEventListener("submit", function(event) {
   volumeSphere();
   
  event.preventDefault();
 });
