'use strict'

const DASHBOARD = document.getElementById('dashboard');

class Calc {
    constructor(options) {

        this.dashboard = options.dashboard;
        this.history = options.history;
        this.floor = options.floor;
        this._renderDashboard(dashboard);
        this._screen = document.querySelector('.screen');
        this._buttons = document.querySelectorAll('.buttons');

        document.getElementById('dashboard').onclick = this._onBtnClick.bind(this);
        document.onkeydown = this._onKeyPress.bind(this);

    }

    _onBtnClick(event, key) {

        if (event.target.className == 'result') this._screen.innerHTML += event.target.innerHTML;

        if (event.target.tagName != 'SPAN') {
            if (!key) return;
        }

        if (key) {
            var button = key;
        } else {
            var button = event.target.innerHTML;
        }

        let click = document.getElementById('buttonclick');
        click.play();

        let operators = ['+', 'x', '÷', '.', '+'];
        let lastChar = this._screen.innerHTML[this._screen.innerHTML.length - 1];


        if (button == 'c') {
            this._screen.innerHTML = '';
            return;
        }

        if (button == '▼') {

            if (this.history == false) return;

            let module = document.getElementById('history');
            if (module.style.display == 'block') {
                module.style.display = 'none';
                return;
            } else {
                module.style.display = 'block';
                return;
            }
        }

        if (button == '=') {
            let result = this._screen.innerHTML
            result = result.replace(/x/g, '*').replace(/÷/g, '/').replace(/&nbsp;/g, '').replace(',', '.');
            result = eval(result);
            result = this._floor(result, this.floor).toLocaleString();
            this._screen.innerHTML = result;

            if (this.history == true) this._appendHistory(this._screen.innerHTML);

            return;
        }

        if (button == '←') {
            this._screen.innerHTML = this._screen.innerHTML.slice(0, -1);
            return;
        }

        if (!isNaN(button)) {
            this._screen.innerHTML += button;
            return;
        }

        if (button == '-') {
            if (operators.indexOf(button) && lastChar != '-') {
                this._screen.innerHTML += button;
            }
            return;
        }

        if (operators.indexOf(button) || button == '+') {
            if (!isNaN(lastChar)) {
                this._screen.innerHTML += button;
            }
            return;
        }
    }

    _onKeyPress(event) {

        let key = String.fromCharCode(event.keyCode);

        switch (key) {
        case '0':
            this._onBtnClick(event, key);
            break;
        case '1':
            this._onBtnClick(event, key);
            break;
        case '2':
            this._onBtnClick(event, key);
            break;
        case '3':
            this._onBtnClick(event, key);
            break;
        case '4':
            this._onBtnClick(event, key);
            break;
        case '5':
            this._onBtnClick(event, key);
            break;
        case '6':
            this._onBtnClick(event, key);
            break;
        case '7':
            this._onBtnClick(event, key);
            break;
        case '8':
            this._onBtnClick(event, key);
            break;
        case '9':
            this._onBtnClick(event, key);
            break;
        }
    }

    _appendHistory(result) {
        let node = document.getElementById('history');

        if (node.childElementCount > 4) {

            let firstresult = node.firstChild;
            node.removeChild(firstresult);
        }

        let template = `<div class='result'>` + result + `</div>`;
        node.innerHTML += template;
    }

    _renderDashboard(dashboard) {

        let templates = {

            calculator: `
                            <div id="calculator">

                                <div class="screen" id='value'></div>

                                <div class="keys">
                                    <span class="clear operators buttons" id="c">c</span>
                                    <span class="buttons">x</span>
                                    <span class="buttons">÷</span>
                                    <span class="buttons">←</span>
                                    <span class="buttons">7</span>
                                    <span class="buttons">8</span>
                                    <span class="buttons">9</span>
                                    <span class="buttons">▼</span>
                                    <span class="buttons">4</span>
                                    <span class="buttons">5</span>
                                    <span class="buttons">6</span>
                                    <span class="buttons">-</span>
                                    <span class="buttons">1</span>
                                    <span class="buttons">2</span>
                                    <span class="buttons">3</span>
                                    <span class="buttons plus">+</span>
                                    <span class="buttons">0</span>
                                    <span class="buttons">.</span>
                                    <span class="buttons">=</span>
                                </div>

                            </div>
                        `,

            history: `<div id="history"></div>`

        }

        dashboard.innerHTML += templates.calculator;

        if (this.history == true) dashboard.innerHTML += templates.history;
    }

    _floor(number, signs) {

        let mult = Math.pow(10, signs);

        return Math.floor(number * mult) / mult;
    }

}

var app = new Calc({
    dashboard: DASHBOARD
    , history: true
    , floor: 4
});