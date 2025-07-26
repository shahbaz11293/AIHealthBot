
let consentGiven = false;
let token = localStorage.getItem('healthbot_token') || crypto.randomUUID();
localStorage.setItem('healthbot_token', token);

function giveConsent(given) {
  consentGiven = given;
  $('#consent-section').hide();
  $('#chat-section').removeClass('d-none');
}

$(document).ready(function () {
  $('#sendBtn').on('click', function () {
    const input = $('#userInput').val().trim();
    if (!input) return;

    appendToChat('You', input);

    $.ajax({
      url: 'http://localhost:5000/api/chat',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'X-User-Consent': consentGiven
      },
      contentType: 'application/json',
      data: JSON.stringify({ message: input }),
      success: function (data) {
        appendToChat('Bot', data.response);
      },
      error: function () {
        appendToChat('Bot', 'Server error. Try again later.');
      }
    });

    $('#userInput').val('');
  });
});

function appendToChat(sender, text) {
  $('#chat-log').append('<div><strong>' + sender + ':</strong> ' + text + '</div>');
  $('#chat-log').scrollTop($('#chat-log')[0].scrollHeight);
}
