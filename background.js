chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.selectedValue) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
                code: `
                    // get all radio buttons
                    var radioButtons = document.querySelectorAll('input[type="radio"]');
                    // get groups of radio buttons
                    var groups = [];
                    for (var i = 0; i < radioButtons.length; i++) {
                        var group = radioButtons[i].getAttribute('name');
                        if (groups.indexOf(group) === -1) {
                            groups.push(group);
                        }
                    }
                    const index = '${request.selectedValue}';
                    // check the selected radio button
                    for (var i = 0; i < groups.length; i++) {
                        var group = groups[i];
                        group[index].checked = true;
                    }
                `,
            });
        });
    }
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.selectedValue) {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.executeScript(tabs[0].id, {
//                 code: `
//                     var radioButtons = document.querySelectorAll('input[type="radio"]');
//                     for (var i = 0; i < radioButtons.length; i++) {
//                         if (radioButtons[i].value == "${request.selectedValue}") {
//                             radioButtons[i].checked = true;
//                         }
//                     }
//                 `,
//             });
//         });
//     }
// });
