class Queue {
    arr = new array();

    constructor(callback:Function) {
        window.setInterval(( () use callback => 
            isProcessing = false;

            if (queue.arr.length > 0) {
                imageProcess(queue.arr[0], () use (isProcessing) => {
                    isProcessing = true;
                    // Do something.

                    isProcessing = false;

                    if (isProcessing === false) {
                        queue.removeFromQueue(0);
                    }
                });
            }
        ), 200);
    }

    function isEmpty(): Boolean {
        if (arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    function addToQueue(imagePath:string) {
        arr.insertAt(imagePath,arr.length);
    }

    function removeFromQueue(imagePath:string) {
        for (let index = 0; index < array.length; index++) {
            if (arr[index] === imagePath) {
                arr.removeFrom(index);
            }
        }
    }
}