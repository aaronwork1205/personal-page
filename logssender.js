async function sendLog() {
  // 这里 ip 不填，服务器从请求中提取真实 IP
  const data = {
    ip: "",
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };

  try {
    const response = await fetch('https://api.aaronw.link/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Log sent successfully');
    } else {
      console.error('Failed to send log', response.status);
    }
  } catch (err) {
    console.error('Error sending log', err);
  }
}

window.addEventListener('load', () => {
  sendLog();
});
