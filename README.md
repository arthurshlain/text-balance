# text-balance
Simple text wrapping helper

# how it looks

Without balance:

![image](https://user-images.githubusercontent.com/2047645/186490535-cbae5135-2208-4cc8-adf5-f158e6257c14.png)

With balance:

![image](https://user-images.githubusercontent.com/2047645/186490633-2ffa7e98-4074-4c5e-96fb-92f3ac8395a3.png)

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

# hints

Use `&nbsp;` and `&shy;` for better results

# demo

https://codepen.io/ArtZ91/pen/PoRgxPM

# alternatives

https://github.com/adobe/balance-text
