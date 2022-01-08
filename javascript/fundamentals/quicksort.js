function partition(arr, left, right){
    let pivot=arr[Math.floor((left+right)/2)];
    console.log(pivot);
    var i=left;
    var j=right;
    while(i!=j){
        while(arr[i]<pivot){
            i++;
        }
        while(arr[j]>pivot){
            j--;
        }
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        console.log(arr);
    }
    return j
}

function quicksort(arr, left, right){
    if(left<right){
        let p = partition(arr, left, right);
        quicksort(arr, left, p-1);
        quicksort(arr, p+1, right);
    }
    return arr
}

function generate_random_array(){
    let random_array=[];
    while(random_array.length<10){
        let rand_int = Math.floor(Math.random()*100);
        if(random_array.indexOf(rand_int)===-1){
            random_array.push(rand_int);
        }
    }
    return random_array
}


var random_array = generate_random_array();

console.log((quicksort(random_array, 0, random_array.length-1)));