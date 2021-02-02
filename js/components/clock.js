function clock(selector, deadline) {
    //validation
    if (typeof selector !== 'string' ||
    selector === '') {
        console.error('ERROR: netinkamo formato selektorius.');
        return false;
    }
    if (typeof deadline !== 'string' ||
    deadline === '' ||
    !isFinite((new Date('2000-' + deadline).getTime()))) {
        console.error('ERROR: netinkamo formato deadlinas.');
        return false;
    }

    //logic

    const DOM =document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: pagal pateikta selektoriu elementas nerastas.');
        return false;
    }
     
    let numbers = {
        days: 432,
        hours: 9,
        minutes: 37,
        seconds: 39
    };
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        const key = labels[i];
        HTML += `<div class="time">
            <div class="value">${formatNumber(numbers[key])}</div>
            <div class=label">${key}</div>
        </div>`;
    }


    //post logic


    //rezult
    DOM.innerHTML = HTML;

        //jeigu radome kur yra laikrodzio elementas, tai 
        //dabar reikia rasti kur yra visi elementai value
            //neefektyvi paieska, nes ieskoma visame html dokumente
    //const allValueDOM = document.querySelectorAll(`${selector} > .time > .value`);
            //zymiai efektyvesne paieska, nes pradeda nuo jau zinomos artimiausios tinkamos vietos
    
    const allValueDOM = DOM.querySelectorAll('.value');
    console.log(allValueDOM);

    setInterval( function () {
       numbers = updateClock(deadline);
       for (let i = 0; i < 4; i++) {
           const key = labels[i];
           allValueDOM[i].innerText = formatNumber(numbers[key]);
       }
    }, 1000)

    function updateClock(deadline) {
        const date = new Date();

        let deadlineYear = date.getFullYear(); //pirmiausiai susizinoti siandienos data
        let fullDeadline = `${deadlineYear}-${deadline}`;
        let deadlineInMiliseconds = new Date(fullDeadline).getTime();
        const now = Date.now(); //dabar

        if (deadlineInMiliseconds < now) { //jau yra praeityje
            deadlineYear++ // prie 2021 prisideda po 1 metus
            fullDeadline = `${deadlineYear}-${deadline}`;
            deadlineInMiliseconds = new Date(fullDeadline).getTime();
        }
        
       const diff = (deadlineInMiliseconds - now);

       //skaiciuojame valandas
       let unusedseconds = Math.round(diff / 1000); // Math.round -> apvalina i pagal 0.5 taisykle
                                          // Math.ceil -> apvalina i aukstesne puse
       const days = Math.floor(unusedseconds / 60 /60 / 24); //math.floor -> apvalina i zemesne puse
       unusedseconds -= days * 60 * 60 * 24
       
       const hours = Math.floor(unusedseconds / 60 /60);
       unusedseconds -= hours * 60 * 60;
       
       const minutes = Math.floor(unusedseconds / 60);


       const seconds = unusedseconds - minutes * 60;

       return {
            days, //sutrumpinimas kai raktazodis ir kintamasis sutampa. galima palikti tik viena zodi
            hours,
            minutes,
            seconds
       };
    }
}

// kai skicius vienazenklis, tai pries ji rasoma 0
function formatNumber(number) { 
    return number < 10 ? '0' + number : number;
}

export { clock }