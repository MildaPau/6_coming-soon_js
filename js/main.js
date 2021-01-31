import {clock} from './components/clock.js';

// ISKVIESTI FUNKCIJA
import {renderSocials} from '../js/components/renderSocials.js';
import {renderProgressBars} from '../js/components/renderProgressBars.js';

// PAIMTI DUOMENIS
import {socialsData} from '../js/data/socialsData.js';
import {progressBarData} from '../js/data/progressBarData.js';

// FUNKCIJAI PERDUOTI DUOMENIS
clock('.clock','12-14 18:00:00');
renderSocials('footer > .socials', socialsData);
renderProgressBars('.left-column', progressBarData);


