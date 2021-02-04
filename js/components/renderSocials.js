function renderSocials(selector, data){
    
    // validation 
    if (typeof selector !== 'string') {    
        return console.error('ERROR: selector turi buti string tipo.');
    }
    if (typeof selector === '') {    
        return console.error('ERROR: negali buti tuscias tekstas.');
    }
    if (!Array.isArray(data)) {    // jeigu sarasas nera saraso tipo, tai
        return console.error('ERROR: duomenys turi buti array tipo.');
    }
    
    const count = data.length;

    if (count === 0) {
        return console.error('ERROR: duomenu sarase turi buti bent vienas objektas.');
    }

    
    //logic
    const DOM = document.querySelector(selector); // null
    if(!DOM) {
        return error('ERROR: pagal pateikta eselektoriu nepavyko rasti norimo elemento')
    }

    let HTML = '';

    for (let i=0; i<count; i++) {
        const item = data[i];

        if(typeof item !== 'object' ||     //duomenu testai
           Array.isArray(item) ||
           !item.href ||
           typeof item.href !== 'string' ||
           !item.icon ||
           typeof item.icon !== 'string') {
               console.warn('WARNING: rastas netinkamo formato irasas.')
            continue;
        }

        HTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}">${item.icon}</a>`;
        /*console.log(item);*/
    }

    // post logic validation
    if (HTML === '') {
        return console.error('ERROR: duomenu sarase nerasta nei vieno normalaus objekto');
    }
    
    // return rezult

    DOM.innerHTML = HTML; 

    return;
}


export {renderSocials}
