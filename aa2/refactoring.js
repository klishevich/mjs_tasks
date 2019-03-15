// function sendStatistics(serviceName, userName, text, callback) {
//   var url = 'http://example.com?service=' + serviceName + '&user=' + userName + 'text=' + text;
//   if (!settings.isStatisticsAllowed) {
//     return;    
//   }
//   ajax({
//     url: url,
//     success: function () {
//       console.log('success');
//       callback();
//     }
//   });
// }

function sendStatistics(serviceName, userName, text, callback, isStatisticsAllowed) {
  const url = `http://example.com?service=${serviceName}&user=${userName}text=${text}`;
  if (!isStatisticsAllowed) {
    return;    
  }
  ajax({
    url,
    success: () => {
      console.log('success');
      callback();
    }
  });
}
