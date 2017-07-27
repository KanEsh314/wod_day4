function universal(time)
{
  time.split();
  var h = parseInt(time[0].concat(time[1]));
  var m = time[3].concat(time[4]);
  var s = time[6].concat(time[7]);
  var ampm = time[8].concat(time[9]);
  var mm = 0;
  if(ampm == "PM" || ampm == "pm")
     {
       if(h < 12)
       {
        mm = h + 12;
       }
       else
         {
           mm = "12";
         }
       document.write(mm + ":" + m + ":" + s)
     }
     if(ampm == "AM" || ampm == "am")
    {
      if(h < 12)
       {
        mm = h;
       }else{ 
         mm = "00"
       }
      document.write(mm + ":" + m + ":" + s)
    }
}
universal("07:45:45AM");