# text-balance
Simple text wrapping helper

![image](https://user-images.githubusercontent.com/2047645/186486979-504d8cc2-96b4-4d7f-8133-417a4d152431.png)


# usage

HTML

```html
<!-- Single balanced text -->
<div class="text-balance">
    <p>Lorem ipsum dolor sit amet</p>
</div>

<!-- Balanced text group - Bootstrap columns example -->
<div class="row text-balance-group">
    <div class="col-4">
        <div class="text-balance mx-auto">
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
    <div class="col-4">
        <div class="text-balance mx-auto">
            <p>Lorem ipsum</p>
        </div>
    </div>
    <div class="col-4">
        <div class="text-balance mx-auto">
            <p>Lorem ipsum dolor</p>
        </div>
    </div>
</div>
```

JS

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
