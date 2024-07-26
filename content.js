document.querySelector('body').style.border = '15px solid blue'
function uploadReplay(){
    const button = document.querySelector('button[name="saveReplay"]');
    if(button){
        button.click();
    }
}

function forfeitCheck(butt){
    document.querySelector('body').style.border = '15px solid green'
    let form = document.querySelector('.ps-popup');
    form = form.children[0];
    if  (form.children[0].textContent != 'Forfeiting makes you lose the battle. Are you sure?'){
        return;
    }
    let check = form.querySelector('.checkbox');
    check.checked = false;
    console.log(check);
    //form.querySelector('button[type="submit"]').click();
    setTimeout(uploadReplay, 1000);
    
    
    //butt.click();
    
}



const observer = new MutationObserver(uploadReplay)
const config = {childList: true, subtree: true}
observer.observe(document.body, config);
const tabbar = document.querySelector('.tabbar');
tabbar.addEventListener('click', function(event){
    document.querySelector('body').style.border = '15px solid red'
    console.log(event.target.tagName);
    console.log(event.target.value);
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
            setTimeout(() =>forfeitCheck(button), 1000);
        }
    }
    
});
//const exit = document.querySelector('.inner')[1][0][1];
//exit.addEventListener('click', handle);