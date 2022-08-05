
let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');
if (style == null) {
    setTheme('normal');
}else{
    setTheme(style);
}

for (let i of switches)  {
    i.addEventListener('click', function() {
        let theme = this.dataset.theme;
        console.log(theme);
        setTheme(theme);
    });
}

function setTheme(theme)  {
    if (theme == 'dark-red') {
        document.getElementById('switcher-id').href='./theme/dark-red-theme.css';
    }else if (theme == 'burlywood') {
        document.getElementById('switcher-id').href='./theme/burlywood-theme.css';
    }else if (theme == 'green') {
        document.getElementById('switcher-id').href='./theme/green-theme.css';
    }else if (theme == 'normal') {
        document.getElementById('switcher-id').href='./theme/default-theme.css';
    }else if (theme == 'orange') {
        document.getElementById('switcher-id').href='./theme/orange-theme.css';
    }else if (theme == 'purple') {
        document.getElementById('switcher-id').href='./theme/purple-theme.css';
    }
    localStorage.setItem('style', theme);
}

