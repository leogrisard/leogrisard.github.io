function myLoop() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var count = document.getElementById("count").value;
  
  count = Number(count);
  start = Number(start);
  end = Number(end);
  
  console.log(typeof count);
  console.log(typeof start);
  console.log(typeof end);
    
  for (var i = start; i <= end; i+=count) 
    {
      document.write( '<p>' + i + '</p>');
      // document.write(jump);
      // console.log(i);
    }
}
