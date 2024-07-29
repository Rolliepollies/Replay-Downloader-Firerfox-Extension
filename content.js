let observer;
//automatically click and close Replay
function uploadReplay(){
    const button = document.querySelector('button[name="saveReplay"]');
    if(button){
        button.click();
        observer.disconnect();
    }
    else return;
    setTimeout(closeReplay, 5000);
    return; 
    
}

/*function closeReplay(){
    let form = document.querySelector('.ps-popup');
    let but2 = form.querySelector('.buttonbar').children[0];
    if(but2)but2.click();
    if(observer)observer.disconnect();
    return;
}*/
//was gonna use this but decided not to

//if clicking the exit button will forfeit upload the replay and close the tab
function forfeitCheck(){
    //document.querySelector('body').style.border = '15px solid green'
    let form = document.querySelector('.ps-popup');
    form = form.children[0];
    if  (form.children[0].textContent != 'Forfeiting makes you lose the battle. Are you sure?'){
        return;
    }
    let check = form.querySelector('.checkbox');
    const box = check.children[0];
    box.removeAttribute('checked');
    
    //console.log(check);
    form.querySelector('button[type="submit"]').click();
    setTimeout(leave, 2500);
    return
    
    //butt.click();
    
}
//leaves battle tab during forfeit task
function leave(){
    let battle = window.location.href;
    battle = battle.split('/')[3];
    document.querySelector('button[value = "'+battle+'"]').click();
    //document.querySelector('body').style.border = '15px solid yellow'
}


function start(){

    //document.querySelector('body').style.border = '15px solid blue' this is for testing
    observer = new MutationObserver(uploadReplay)
    const config = {childList: true, subtree: true}
    observer.observe(document.body, config);
    const tabbar = document.querySelector('.tabbar');
    tabbar.addEventListener('click', function(event){
        document.querySelector('body').style.border = '15px solid red'
        //console.log(event.target.tagName);
        //console.log(event.target.value);
        let button = event.target;
        if(button.tagName == 'I'){
            button = event.target.parentElement;
        }
        console.log(button);
        if(button.tagName == 'BUTTON'){
            let battle = window.location.href;
            battle = battle.split('/')[3];
            console.log(battle);
            if(button.value == battle){
                setTimeout(() =>forfeitCheck(), 1000);
            }
        }
        
    });
}
let lastUrl = window.location.href;
function change() {
    //console.log('change');
    const currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        start();
    }
}

window.addEventListener('click', change);
start();
//const exit = document.querySelector('.inner')[1][0][1];
//exit.addEventListener('click', handle);
