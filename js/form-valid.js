
   function validate(form) {
    console.log(2222);
    if (k2==0) {
      document.getElementById("form id").in7.value = '04';
      


    };
    if (k3==0) {
     
      document.getElementById("form id").in8.value = '2019';


    };

      var elems = form.elements;
      console.log(elems);
      console.log(elems.in1.value);
      console.log(elems.in2.value);
      console.log(elems.in3.value);
      console.log(elems.in4.value);
      console.log(elems.in5.value);
      console.log(elems.in6.value);
      console.log(elems.in7.value);
      console.log(elems.in8.value);

     /* console.log(e);
      console.log(c);*/
      n1=/[0-9]{4}/;
      cvv=/[0-9]{3}/;
      name333=/[A-Z]/i;
      var kol = 0;

      if (n1.test(elems.in1.value)){
        console.log("верно"+elems.in1.value);
         elems.in1.style.borderColor = null;
         kol=kol+1;
        

      }
      else {
        console.log("не верно"+elems.in1.value);
        var cv = document.getElementById('in1');
        cv.style.borderColor="#ff0000";
      };

      if (n1.test(elems.in2.value)){
        console.log("верно"+elems.in2.value);
        elems.in2.style.borderColor = null;
        kol=kol+1;

      }
      else {
        console.log("не верно"+elems.in2.value);
        var cv = document.getElementById('in2');
        cv.style.borderColor="#ff0000";
      };
      if (n1.test(elems.in3.value)){
        console.log("верно"+elems.in1.value);
        elems.in3.style.borderColor = null;
        kol=kol+1;

      }
      else {
        console.log("не верно"+elems.in3.value);
        var cv = document.getElementById('in3');
        cv.style.borderColor="#ff0000";
      };
      if (n1.test(elems.in4.value)){
        console.log("верно"+elems.in4.value);
        elems.in4.style.borderColor = null;
        kol=kol+1;

      }
      else {
        console.log("не верно"+elems.in4.value);
        var cv = document.getElementById('in4');
        cv.style.borderColor="#ff0000";
      };
      if (cvv.test(elems.in6.value)){
        console.log("верно"+elems.in6.value);
        elems.in6.style.borderColor = null;
        kol=kol+1;
        

      }
      else {
        console.log("не верно"+elems.in6.value);
        elems.in6.style.borderColor = "#ff0000";
      //  var cv = document.getElementsByName('in6');
       // cv.style.borderColor="#ff0000";
      };
      if (name333.test(elems.in5.value) && elems.in5.value.length >= 3) {
        console.log("верно"+elems.in6.value);
        elems.in5.style.borderColor = null;
        kol=kol+1;

      }
      else {
        console.log("не верно"+elems.in5.value);
        elems.in5.style.borderColor = "#ff0000";
        //var cv = document.getElementsByName('in5');
        //cv.style.borderColor="#ff0000";
      };

      if (kol==6) {
         document.getElementById("form id").submit();
       };



    }


