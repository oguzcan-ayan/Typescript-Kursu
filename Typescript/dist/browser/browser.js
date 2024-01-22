/* const body = document.querySelector('body')!;
console.log(body);
 */
console.log("Hi, browser");
/* window.addEventListener('click', e => {

    const { target } = e;
    if(target instanceof HTMLHtmlElement){
        console.log(target.location.href);
    }

});
 */
const button = document.querySelector("#clicker");
if (button) {
    button.addEventListener("click", e => {
        if (e.currentTarget instanceof HTMLButtonElement) {
            console.log(e.currentTarget);
        }
    });
}
export {};
