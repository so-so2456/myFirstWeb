var colorF = {
  setBackGroundColor : function(color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor : function(color) {
    document.querySelector('body').style.color = color;
  },
  setColorA : function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
  setBorderColor : function(color) {
    document.getElementById('grid').style.borderColor = color;
    document.getElementById('line').style.borderColor = color;
  }
}

function changeInputValue(value) {
  var button = document.querySelectorAll('input');
  var i = 0;
  while (i < button.length) {
    button[i].value = value;
    i++;
  }
}

function NightDayChange(self) {
  if (self.value === 'night') {
    colorF.setBackGroundColor('#303030');
    colorF.setColor('white');
    colorF.setColorA('white');
    colorF.setBorderColor('white');
    changeInputValue('day');
  }
  else {
    colorF.setBackGroundColor('white');
    colorF.setColor('black');
    colorF.setColorA('black');
    colorF.setBorderColor('black');
    changeInputValue('night');
  }
}
