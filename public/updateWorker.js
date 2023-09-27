self.addEventListener('message', (e) => {
    if (e.data === 'start') {
        const interval = setInterval(() => {
            self.postMessage('update');
        }, 1500);

        self.addEventListener('message', (e) => {
            if (e.data === 'stop') {
                clearInterval(interval);
            }
        });
    }
});
