export function textBalance() {
    let items = document.querySelectorAll(".text-balance");

    items.forEach(function (item) {
        item.style.width = "";
        item.style.minWidth = "";
        item.classList.remove("text-balanced");
        let itemGroup = item.closest(".text-balance-group");
        let currentHeight = item.offsetHeight;
        let maxHeight = currentHeight;
        if (itemGroup !== null) {
            let groupItems = itemGroup.querySelectorAll(".text-balance");
            let resetGroupItems = false;
            groupItems.forEach(function (groupItem) {
                if (groupItem === item) {
                    resetGroupItems = true;
                }
                if (resetGroupItems) {
                    groupItem.style.width = "";
                    item.style.minWidth = "";
                }
                let groupItemHeight = groupItem.offsetHeight;
                if (groupItemHeight > maxHeight) {
                    maxHeight = groupItemHeight;
                }
            });
        }
        let thisHeight = currentHeight;
        let newWidth = item.offsetWidth;
        let testWidth = newWidth;
        // Try shrinking width until height changes
        while (thisHeight <= maxHeight && testWidth > 0) {
            testWidth = newWidth - 10;
            item.style.width = testWidth + "px";
            thisHeight = item.offsetHeight;
            if (thisHeight <= maxHeight) {
                newWidth = testWidth;
            }
        }
        item.style.width = newWidth + "px";
        item.style.minWidth = "min-content";
        item.classList.add("text-balanced");
    });
}
