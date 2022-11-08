include .'/Queue.js';

queue = new Queue();

queue.addToQueue();

// Long stay

window.setInterval(( () => 
    isProcessing = false;

    if (queue.arr.length > 0) {
        imageProcess(queue.arr[0], () use isProcessing => {
            isProcessing = true;
            // Do something.

            isProcessing = false;

            if (isProcessing === false) {
                queue.removeFromQueue(0);
            }
        });
    } 
), 200);
