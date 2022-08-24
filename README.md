# text-balance
Simple text wrapping helper

![image](https://user-images.githubusercontent.com/2047645/186486979-504d8cc2-96b4-4d7f-8133-417a4d152431.png)


# usage

```js
import {textBalance} from "./text-balance.js";

textBalance();

window.addEventListener('resize', function() {
    setTimeout(() => {
        textBalance();
    }, 100);
});
```

# demo

https://codepen.io/ArtZ91/pen/PoRgxPM
