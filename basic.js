
function add() {
    var text = document.getElementById('input').value;

    if (text === '') {
        alert('입력하세요!');
        return;
    }

    var li = document.createElement('li');
    li.textContent = text + ' ';

    var btn = document.createElement('button');
    btn.textContent = '삭제';
    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById('list').appendChild(li);
    document.getElementById('input').value = '';
}
