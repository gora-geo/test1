
  var canvas1 = document.getElementById('canvas');
//var context1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('canvass');
//var context2 = canvas2.getContext('2d');
  if (canvas1.getContext) {
  var ctx1 = canvas1.getContext('2d');  //вызываем контекст рисования тоесть холст

           ctx1.beginPath();  //рисуем оси координат
           ctx1.moveTo(0, 8);
           ctx1.lineTo(8, 16);
           ctx1.moveTo(8, 16);
           ctx1.lineTo(16, 8);
           ctx1.strokeStyle = "#000";
           ctx1.stroke();
         }

   if (canvas2.getContext) {       
var ctx2 = canvas2.getContext('2d');  //вызываем контекст рисования тоесть холст

           ctx2.beginPath();  //рисуем оси координат
           ctx2.moveTo(0, 8);
           ctx2.lineTo(8, 16);
           ctx2.moveTo(8, 16);
           ctx2.lineTo(16, 8);
           ctx2.strokeStyle = "#000";
           ctx2.stroke();
}


