document.getElementById('checkBtn').addEventListener('click', function () {
    var selectedValue = document.querySelector('input[name="value"]:checked').value;
    chrome.runtime.sendMessage({ selectedValue: selectedValue });
    // alert(selectedValue);
});
