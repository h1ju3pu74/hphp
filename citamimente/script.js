document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '<p>Te amo ❤️</p>';
    document.getElementById('result').style.display = 'block';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('yesBtn').style.width = '100%';
    document.getElementById('noBtn').style.width = '0';
});
