window.onload = function () {
    var names = ['Persimmon', 'Pumpkin', 'Shouga', 'Q'];
    var max = names.length;
    var message;
    var btn = document.getElementById('btn');
    var output = document.getElementById('output');

    btn.onclick = function () {
        random_member = Math.floor(Math.random() * max);
        message = '<p class="lottery__message">The cat\'s name is...</p>';
        message += '<p class="lottery__name">' + names[random_member] + '</p>';
        output.innerHTML = message;
    }
}
