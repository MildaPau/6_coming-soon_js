function form(selector) {
    const formDOM =document.querySelector(selector); /*vieta. Kur yra elementai*/
    const allInputsDOM = formDOM.querySelectorAll('input'); //ras visus elementus. Bus ARRAY
    const alltextareaDOM = formDOM.querySelectorAll('textarea');
    const allTextsDOM = [...allInputsDOM, ...alltextareaDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]') /*vieta kur yra migtukai. Tikslinis elementas*/ 

    
    //kai kas nors ka nors padarys su elementu (paspaus, atsisius zinute...)
    //kokia funkcija daryti toliau
    //ivykiu stebejimas

    // arrow function
    submitDOM.addEventListener('click', event => {
        event.preventDefault();

        for (const input of allTextsDOM) {
            console.log(input.value);
            console.log(input.dataset.validationRule); //pagal kokia staisykles tikrinti

            const rule = input.dataset.validationRule;

            switch (rule) {
                case 'name':
                    console.log('validuoju pagal vardo taisykles', text);
                    break;
                case 'email':
                    console.log('validuoju pagal email taisykles', text);
                    break;
                case 'text':
                    console.log('validuoju pagal text taisykles', text);
                    break;
                default:
                    console.log('rasta neatpazinta validavimo taisykle:', rule);
                    break;
            }

        }

    });

}

export {form}