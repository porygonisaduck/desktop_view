function eitherChange(name) {
    button = document.getElementsByClassName(name)[0];
    console.log(button);

    if (button.firstChild.textContent == "Show More") {
        button.firstChild.textContent = "Hide";
        myShow(name);
    }
    else {
        button.firstChild.textContent = "Show More";
        myHide(name);
    }
}

function myShow(name) {
    const hide = document.getElementsByClassName('hide');
    
    let defaults = 2;
    for (let i = 0; i < hide.length; i+=defaults) {
        console.log(i);
        if (hide[i].getAttribute('id') == name) {
            hide[i].style.display = "block";
            try {
                hide[i+1].style.display = "block";
            }
            catch {
                continue;
            }

        }

        if (name.slice(0,6) == "recipe") {
            defaults = 1;
        }
    }
}

function myHide(name) {
    const hide = document.getElementsByClassName('hide');

    let defaults = 2;
    for (let i = 0; i < hide.length; i+=defaults) {
        if (hide[i].getAttribute('id') == name) {
            hide[i].style.display = "none";
            try {
                hide[i+1].style.display = "none";
            }
            catch {
                continue;
            }
        }

        if (name.slice(0,6) == "recipe") {
            defaults = 1;
        }
    }
}

onload = function(){
    let parent = document.getElementById("main");
    let children = parent.children;
    let length = parent.children.length;

    for (let i = 0; i < length; ++i) {
        parent.append(children[Math.floor(Math.random() * length)])
    }

    this.document.querySelector("body").style.display = "block";
}