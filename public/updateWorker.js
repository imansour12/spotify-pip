self.addEventListener('message', (e) => {
    if (e.data === 'start') {
        const interval = setInterval(() => {
            self.postMessage('update');
        }, 3000);

        self.addEventListener('message', (e) => {
            if (e.data === 'stop') {
                clearInterval(interval);
            }
        });
    }
});
