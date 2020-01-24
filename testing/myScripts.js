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
    
  while(start <= end) 
    {
      start+=count;
      document.write( '<p>' + start + '</p>');
    }
  
  while(start >= end) 
    {
      start-=count;
      document.write( '<p>' + start + '</p>');
    }
}
