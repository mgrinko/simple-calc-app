'use strict'

class Calc {
    constructor() {

        this._screen = document.querySelector('.screen');
        this._buttons = document.querySelectorAll('.buttons');

        for (let i = 0; i < this._buttons.length; i++) {
            this._buttons[i].onclick = this._onBtnClick.bind(this);
        }
        
        document.onkeydown = this._onKeyPress.bind(this);
        
    }

    _onBtnClick(event,key) {
    
        let click = document.getElementById('buttonclick');
        click.play();
        let button = event.currentTarget.innerHTML || key;
        let operators = ['+', '-', 'x', '÷', '.', '+'];
        let lastChar = this._screen.innerHTML[this._screen.innerHTML.length - 1];

        if (button == 'c') {
            this._screen.innerHTML = '';
            return true;
        }

        if (button == '=') {
            let result = this._screen.innerHTML;
            result = result.replace(/x/g, '*').replace(/÷/g, '/').replace(/&nbsp;/g, '').replace(',','.');
            this._screen.innerHTML = eval(result).toLocaleString();
            return true;
        }
        
        if (button == '←') {
            this._screen.innerHTML = this._screen.innerHTML.slice(0, -1);
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

        if (operators.indexOf(button) || button == '+') { // + Bugfix
            if (!isNaN(lastChar)) {
                this._screen.innerHTML += button;
            }
            
            return true;
        }
        
    }
    
    _onKeyPress(event) {
        
        let key = String.fromCharCode(event.keyCode);
        
        switch(key) {
            case '0' : this._onBtnClick(event,key);
                break;
            case '1' : this._onBtnClick(event,key);
                break;
            case '2' : this._onBtnClick(event,key);
                break;
            case '3' : this._onBtnClick(event,key);
                break;
            case '4' : this._onBtnClick(event,key);
                break;
            case '5' : this._onBtnClick(event,key);
                break;
            case '6' : this._onBtnClick(event,key);
                break;
            case '7' : this._onBtnClick(event,key);
                break;
            case '8' : this._onBtnClick(event,key);
                break;
            case '9' : this._onBtnClick(event,key);
                break;
        }
    }
     
}

var app = new Calc;