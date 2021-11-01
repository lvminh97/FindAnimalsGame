var pos = [[0, 0], [0, 0], [0, 0], [0, 0]];
var files = [null, null, null, null];
var found = [false, false, false, false];

window.onload = function(){
    var bg = document.getElementById('bground');
    var width = bg.width;
    var height = bg.height;
    console.log(width + "x" + height);
    pos[0][0] = getRandom(100, width - 100);
    pos[0][1] = getRandom(100, height - 100);
    for(var i = 1; i < 4; i++){
        while(true){
            pos[i][0] = getRandom(100, width - 100);
            pos[i][1] = getRandom(100, height - 100);
            var check = true;
            for(var j = 0; j < i; j++){
                if(Math.abs(pos[i][0] - pos[j][0]) < 100 || Math.abs(pos[i][1] - pos[j][1]) < 100){
                    check = false;
                    break;
                }
            }
            if(check)
                break;
        }
    }
    for(var i = 0; i < 4; i++){
        files[i] = document.getElementById('obj' + (i + 1));
        files[i].style.top = pos[i][1] + 'px';
        files[i].style.left = (pos[i][0] + 40) + 'px';
    }
}

function getRandom(a, b){
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function handleMouseClick(e){
    var x = e.clientX;
    var y = e.clientY;
    for(var i = 0; i < 4; i++){
        if(Math.abs(x - pos[i][0]) < 50 && Math.abs(y - pos[i][1]) < 50){
            files[i].style.display = 'block';
            found[i] = true;
        }
    }
}

function handleMouseMove(e){
    var x = e.clientX;
    var y = e.clientY;
    for(var i = 0; i < 4; i++){
        if(Math.abs(x - pos[i][0]) < 50 && Math.abs(y - pos[i][1]) < 50){
            console.log('img1');
            files[i].style.display = 'block';
        }
        else if(found[i] == false){
            files[i].style.display = 'none';
        }
    }
}