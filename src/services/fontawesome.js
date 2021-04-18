//import 'font-awesome/css/font-awesome.min.css';
import {
    library
} from '@fortawesome/fontawesome-svg-core';


import {
    faCoffee,
    faDesktop,
    faAddressBook,
    faHeart
} from '@fortawesome/free-solid-svg-icons';

export function fontawesome() {

    library.add(faCoffee, faDesktop, faAddressBook, faHeart)

}