let selected_area = 'Floresta';
let minigame_running = false;
let game_interval = null;
let actual_bird = null;
let rolls_left = 3;

let album = {
    'Floresta': [],
    'Praia': [],
    'Campo': []
};

document.getElementById('main').onclick = (e) => {
    const section = e.target;
    selected_area = section.dataset.area;
    document.getElementById('main').setAttribute('hidden', true);
    document.getElementById('back-btn').removeAttribute('hidden');
    
    document.getElementById('menu-header-title').innerHTML = 'Ilha dos Pássaros - ' + selected_area;

    const screen = document.getElementById('explorer');
    screen.removeAttribute('hidden');
    screen.style.backgroundImage = `url("img/background/${selected_area}.png")`;
}

document.getElementById('explorer').onclick = (e) => {
    if(e.target.classList.contains('search-area')) {
        document.getElementById('minigame').removeAttribute('hidden');
    
        startMinigame();
    }
}

function returnToMain() {
    document.getElementById('explorer').setAttribute('hidden', true);
    document.getElementById('back-btn').setAttribute('hidden', true);
    document.getElementById('main').removeAttribute('hidden');
    document.getElementById('menu-header-title').innerHTML = 'Ilha dos Pássaros';
}

function openAlbum() {
    document.getElementById('album').removeAttribute('hidden');
    reloadAlbum();
}

function openCredits() {
    document.getElementById('credits').removeAttribute('hidden');
}

function closeSection(sec) {
    sec.setAttribute('hidden', true);
}

function reloadAlbum() {
    const album_list = document.getElementById('album-list');
    album_list.innerHTML = '';
    for(const a in BIRDS) {
        const area = BIRDS[a];
        for(const bird of area['normal'].concat(area['rare'], area['special'])) {
            let polaroid = document.createElement('SPAN');

            const inAlbum = album[a].filter(b => b.bird.name === bird.name)[0];
            const polaroid_img = document.createElement('DIV');
            if(inAlbum) {
                polaroid.classList.add('filled');
                polaroid_img.style.backgroundImage = `url("${bird.image}")`;
                if(inAlbum.quality === 1) {
                    polaroid_img.style.filter = 'brightness(0)';
                }
                polaroid.onclick = () => {
                    showAlbumInfo(bird, a, inAlbum.quality);
                };
            }
            polaroid.appendChild(polaroid_img);
            album_list.appendChild(polaroid);
        }
    }
}

function showAlbumInfo(bird, area, quality) {
    const info = document.getElementById('album-info');

    const img_el = info.getElementsByTagName('span')[0].getElementsByTagName('div')[0];
    img_el.style.backgroundImage = `url("${bird.image}")`;
    img_el.setAttribute('hd', quality == 2);

    info.getElementsByTagName('h3')[0].innerHTML = area;

    if(quality == 2) {
        info.getElementsByTagName('h2')[0].innerHTML = bird.name;
        info.getElementsByTagName('p')[0].innerHTML = bird.description;
    }
    else {
        info.getElementsByTagName('h2')[0].innerHTML = '???';
        info.getElementsByTagName('p')[0].innerHTML = '?????';
    }
}

function getPattern(rarity) {
    let pattern = [];
    const randomBelt = (sb, eb, size, sizev, error, errorv) => {
        let s = Math.round(size + ((Math.random() - 0.5) * sizev));
        let e = Math.round(error + ((Math.random() - 0.5) * errorv));
        let max = eb - (s + e);
        let start = Math.round(Math.random() * (max-sb) + sb);
        if(e > 0) {
            return [[1, start, start+e], [2, start+e, start+e+s], [1, start+e+s, start+e+s+e]];
        }
        return [[2, start, start+s]];
    };

    switch(rarity) {
        case 'normal':
            pattern = pattern.concat(randomBelt(0, 100, 30, 5, 20, 5));
            break;
        case 'rare':
            pattern = pattern.concat(randomBelt(0, 50, 20, 5, 5, 3));
            pattern = pattern.concat(randomBelt(50, 100, 20, 5, 5, 3));
            break;
        case 'special':
            pattern = pattern.concat(randomBelt(10, 35, 10, 5, 8, 3));
            pattern = pattern.concat(randomBelt(40, 70, 10, 5, 8, 3));
            pattern = pattern.concat(randomBelt(70, 100, 10, 5, 8, 3));
            break;
    }

    return pattern;
}

function getRandomBird() {
    const rarity = Math.random()*100 < 70? 'normal': Math.random()*100 < 80? 'rare': 'special';
    const bird_list = BIRDS[selected_area][rarity];
    const bird = bird_list[Math.round(Math.random() * (bird_list.length - 1))];
    bird.pattern = getPattern(rarity);
    return bird;
}

function actualInAlbum() {
    for(let a in album) {
        for(let register of album[a]) {
            if(register.quality === 2 && register.bird.name === actual_bird.name) return true;
        }
    }
    return false;
}

function startMinigame() {
    actual_bird = getRandomBird();
    
    const audio = new Audio('sound/search.mp3');
    audio.play();

    const minigamebar = document.getElementById('minigame-bar');

    let bar_res = '$0 0%, ';
    let last_pos = 0;
    let last_type = '0';
    for(let ch of actual_bird.pattern) {
        if(last_pos < ch[1]) {
            bar_res += `$0 ${last_pos}%, $0 ${ch[1]}%, `;
        }

        bar_res += `$${last_type} ${ch[1]}%, $${ch[0]} ${ch[1]}%, $${ch[0]} ${ch[2]}%, `;
        last_pos = ch[2];
        last_type = ch[0];
    }
    if(last_pos < 100) {
        bar_res += `$0 ${last_pos}%`;
    }
    else {
        bar_res = bar_res.slice(0, -2);
    }

    bar_res = bar_res
                .replaceAll('$0', 'var(--bad)')
                .replaceAll('$1', 'var(--good)')
                .replaceAll('$2', 'var(--perfect)');
    minigamebar.style.backgroundImage = `linear-gradient(to right, ${bar_res})`;

    const bird_img = document.getElementById('minigame-bird-image');
    bird_img.removeAttribute('discovered');
    bird_img.src = actual_bird.image;
    if(actualInAlbum()) bird_img.setAttribute('discovered', true);
    
    const bird_name = document.querySelector('#minigame-bird label');
    bird_name.innerHTML = actual_bird.name;

    runMinigame();
}

function runMinigame() {
    const minigamebar = document.getElementById('minigame-bar-needle');
    minigame_running = true;

    let bar_pos = 49;
    let direction = 1;
    game_interval = setInterval(() => {
        bar_pos += parseInt(direction * actual_bird.speed / 10);
        if(bar_pos > 100) {
            direction = -1;
            bar_pos += parseInt(direction * actual_bird.speed / 10);
        }
        if(bar_pos < 0) {
            direction = 1;
            bar_pos += parseInt(direction * actual_bird.speed / 10);
        }
        minigamebar.style.marginLeft = `${bar_pos}%`;
        minigamebar.dataset.position = bar_pos;
    }, 100 - actual_bird.speed);
}

function stopMinigame(captured=false) {
    if(minigame_running) {
        minigame_running = false;
        clearInterval(game_interval);
        localStorage.setItem('album', JSON.stringify(album));
    
        if(captured) {
            const audio = new Audio('sound/congrats.mp3');
            audio.volume = 0.2;
            audio.play();
            document.getElementById('minigame-bird').setAttribute('captured', true);
            document.getElementById('minigame-bird-image').removeAttribute('discovered');
        }
    
        setTimeout(() => {
            rolls_left = 3;
            document.getElementById('minigame').setAttribute('hidden', true);
            document.getElementById('minigame-bird').removeAttribute('captured');
            const minigamebar = document.getElementById('minigame-bar-needle');
            minigamebar.style.marginLeft = `50%`;
    
            const camerolls = document.getElementById('camerarolls');
            [...camerolls.getElementsByTagName('img')].forEach(r => {
                r.removeAttribute('used');
            });
        }, 2000);
    }
}

function tryCapture() {
    if(minigame_running) {
        const audio = new Audio('sound/camera-click.mp3');
        audio.play();

        const minigamebar = document.getElementById('minigame-bar-needle');

        const pos = minigamebar.dataset.position;
        const ranges = actual_bird.pattern;
        const error = 1;

        let result = ranges.filter(r => pos >= (r[1]-error) && pos <= (r[2]+error))[0];
        result = result? result[0]: 0;

        const in_album = album[selected_area].filter(b => b.bird.name === actual_bird.name)[0];
        if(!result) {
            const subaudio = new Audio('sound/camera-problem.mp3');
            subaudio.volume = 0.6;
            subaudio.play();
        }
        else {
            if(result == 1) {
                if(!in_album) {
                    album[selected_area].push({ quality: result, bird: actual_bird });
                }
            }
            if(result == 2) {
                const subaudio = new Audio('sound/camera-flash.mp3');
                subaudio.volume = 0.6;
                subaudio.play();
                if(!in_album) {
                    album[selected_area].push({ quality: result, bird: actual_bird });
                }
                else if(in_album.quality == 1) {
                    in_album.quality = 2;
                }
                stopMinigame(true);
            }
        }

        const camerolls = document.getElementById('camerarolls');
        camerolls.getElementsByTagName('img')[3-rolls_left].setAttribute('used', true);
        rolls_left -= 1;
        if(!rolls_left) {
            stopMinigame();
        }
    }
}

function loadSaves() {
    let load_album = JSON.parse(localStorage.getItem('album'));
    if(load_album) album = load_album;
}

loadSaves();