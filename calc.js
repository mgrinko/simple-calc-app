'use strict'

class Calc {
    constructor() {

        this._screen = document.querySelector('.screen');
        this._buttons = document.querySelectorAll('.buttons');

        for (var i = 0; i < this._buttons.length; i++) {
            this._buttons[i].onclick = this._onBtnClick.bind(this);
        }
        
    }


    _onBtnClick(event) {

        var button = event.currentTarget.innerHTML;
        console.log(button);
        var operators = ['+', '-', 'x', '÷', '.', '+'];
        var lastChar = this._screen.innerHTML[this._screen.innerHTML.length - 1];

        if (button == 'c') {
            this._screen.innerHTML = '';
            return true;
        }

        if (button == '=') {
            let result = this._screen.innerHTML;
            result = result.replace(/x/g, '*').replace(/÷/g, '/');
            this._screen.innerHTML = eval(result);
            return true;
        }

        if (button == '+/-') {
            if (this._screen.innerHTML = ' ') {
                this._screen.innerHTML += '-';
            }

            return true;
        }

        if (!isNaN(button)) {
            this._screen.innerHTML += button;
            return true;
        }

        if (operators.indexOf(button) || button == '+') {
            if (!isNaN(lastChar)) {
                this._screen.innerHTML += button;
            }
            
            return true;
        }
    }
     
}

var app = new Calc;