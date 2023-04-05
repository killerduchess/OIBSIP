const input = document.getElementById('input');
        const output = document.getElementById('output');
        const button = document.getElementById('button');
        const selectinput = document.getElementById('selectinput');
        const selectoutput = document.getElementById('selectoutput');


        button.addEventListener('click', () => {
            let inputValue = input.value;
            let selectInput = selectinput.value;
            let selectOutput = selectoutput.value;

            if (selectInput === 'celcius') {
                if(selectOutput === 'celcius')
                    output.value = inputValue;
                else if(selectOutput === 'fahrenheit')
                    output.value = (inputValue * 9/5) + 32;
                else if(selectOutput === 'kelvin')
                    output.value = inputValue*1 + 273.15;
            }
            
            else if (selectInput === 'fahrenheit') {
                if(selectOutput === 'celcius')

                    output.value = (inputValue - 32) * 5/9;
                else if(selectOutput === 'fahrenheit')
                    output.value = inputValue;
                else if(selectOutput === 'kelvin')
                    output.value = (inputValue - 32) * 5/9 + 273.15;
            } 
            
            else if (selectInput === 'kelvin') {
                if(selectOutput === 'celcius')
                    output.value = inputValue - 273.15;
                else if(selectOutput === 'fahrenheit')
                    output.value = (inputValue - 273.15) * 9/5 + 32;
                else if(selectOutput === 'kelvin')
                    output.value = inputValue;
            }
        })