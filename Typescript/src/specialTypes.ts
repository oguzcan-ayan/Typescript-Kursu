interface IPerson{
    name : string,
    surname : string,
    age : number
}

const people : Omit<IPerson, 'surname'> = {
    name : 'Oğuzcan',
    age : 24
}

/* function writeFunc(x : {city : string, country : string}){

}

type xType = Parameters<typeof writeFunc>['0']

const xx : xType = {
    city : 'Istanbul',
    country : 'Turkey'
}
 */
const t : Partial<IPerson> = {

}

const wt : Required<IPerson> = {
    name : 'Ali',
    surname : 'Cabbar',
    age : 56
}

/* const cz : Readonly<IPerson> = {
    name : 'Erdi',
    surname : 'Kivanc',
    age : 25
}

cz.name = 'Ahmet'; */

const ae : Pick<IPerson, 'name'> = {
    name : 'dkjsfhgshgfhs'
}

const das : Pick<IPerson, 'age' | 'surname'> = {
    surname : 'asdsadas',
    age : 34
}

type qwe = Exclude<string | number | boolean, string>

const myValue : qwe = 56;

/* type dfsf = Exclude<string | boolean | (() => void), boolean>

const myValue2 : dfsf = () => {
    return true;
}
 */
/* type qwewe = Exclude<string | number | (() => void), Function>

const myValue3 : qwewe = () => {

} */

/* function returnNumber(){
    return 56;
}

const myValue4 : ReturnType<typeof returnNumber> = 89;

console.log(myValue4); */

import chalk from 'chalk';
import { ErrorTypes } from './errorTypes'

/* const Notifications = {
    success : 0,
    error : 1,
    warning : 2,
    information : 3
}

function sendNotification(notificationType : keyof typeof Notifications){
    const selectedNotification = Notifications[notificationType];

    switch (selectedNotification) {
        case Notifications.success: {
            console.log(chalk.green('Positive'));
            break;
        }
        case Notifications.error: {
            console.error(chalk.red('Negative'));
            break;
        }
        case Notifications.warning: {
            console.warn(chalk.yellow('Warning'));
            break;
        }
        case Notifications.information: {
            console.info(chalk.blue('Info'));
            break;
        }
        default: {
            console.log("Nothing");
            break;
        }
    }
}

sendNotification('success');
 */

/* enum Notifications {
    success,
    error,
    warning,
    information
} */

/* Notifications.success = "5";     Enums are read-only variables   */ 

/* function sendNotification(notificationType : Notifications){

    switch (notificationType) {
        case Notifications.success: {
            console.log(chalk.green('Positive'));
            break;
        }
        case Notifications.error: {
            console.error(chalk.red('Negative'));
            break;
        }
        case Notifications.warning: {
            console.warn(chalk.yellow('Warning'));
            break;
        }
        case Notifications.information: {
            console.info(chalk.blue('Info'));
            break;
        }
        default: {
            console.log("Nothing");
            break;
        }
    }
} */

// sendNotification(Notifications.warning);


const Notifications = {
    success : Symbol(),
    error : Symbol(),
    warning : Symbol(),
    information : Symbol()
}

function sendNotification(notificationType : symbol){

    switch (notificationType) {
        case Notifications.success: {
            console.log(chalk.green('Positive'));
            break;
        }
        case Notifications.error: {
            console.error(chalk.red('Negative'));
            break;
        }
        case Notifications.warning: {
            console.warn(chalk.yellow('Warning'));
            break;
        }
        case Notifications.information: {
            console.info(chalk.blue('Info'));
            break;
        }
        default: {
            console.log("Nothing");
            break;
        }
    }
}

sendNotification(Notifications.error);
sendNotification(Notifications.success);
sendNotification(Notifications.warning);
sendNotification(Notifications.information);

const err: ErrorTypes = {
    error : false,
    success : true
} 

console.log(err);



