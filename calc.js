'use strict'

class Calc {
    constructor() {
    this._screen = document.querySelector('.screen');
    this._screenValue = this._screen.innerHTML;
    this._buttons = document.querySelectorAll('.buttons');
        
    for(var i =0; i < this._buttons.length; i++) { this._buttons[i].onclick = this._onBtnClick.bind(this); }
        
    }
    
    _onBtnClick(event) {
        
       switch(event.currentTarget.innerHTML) {
            case '0' : this._screenValue += 0;
               break;
            case '1' : this._screenValue += 1;
               break;
            case '2' : this._screenValue += 2;
               break;
            case '3' : this._screenValue += 3;
               break;
            case '4' : this._screenValue += 3;
               break;
            case '5' : this._screenValue += 3;
               break;
            case '6' : this._screenValue += 3;
               break;
            case '7' : this._screenValue += 3;
               break;
            case '8' : this._screenValue += 3;
               break;
            case '9' : this._screenValue += 3;
               break;
            case '÷' : this._screenValue += '/';
               break;
            case 'x' : this._screenValue += '*';
               break;
            case 'c' : this._screenValue = '';
               break;
            case '+' : this._screenValue += '+';
               break;
            case '-' : this._screenValue += '-';
               break;
            case '=' : this._screenValue = eval(this._screenValue);
               break;
            case '.' : this._screenValue += '.';
               break;
            default : console.log(this._screenValue);
       }

    }
    
}
    
var app = new Calc;