const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

draggedItem = null;
droppedItem = null;

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend' , dragEnd);
    item.addEventListener('drag', drag);

    item.addEventListener("dragenter", () => {
        if (draggedItem !== droppedItem) {
            droppedItem = item;
        }
    })

    item.addEventListener("dragleave", () => {
        droppedItem = null;
    })
});

placeholders.forEach(placeholder => {
    console.log(placeholder);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
});

function dragStart(event) {
    draggedItem = this;
    event.dataTransfer.setData("item", this.dataset.item);
    // console.log('dragStart', this);
    this.classList.add('hold');
    setTimeout(() =>
    this.classList.add('hide'),
     0)
}

function dragEnd(event) {
    draggedItem = null;
    // console.log('dragEnd');
    this.className = 'item';
}

function drag(event) {
    // console.log(event);
}

// console.log(item);

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.preventDefault();
    this.classList.add('hovered');
    // console.log('dragenter')
}

function dragleave(event) {
    this.classList.remove('hovered');
    // console.log('dragleave')
}

function dragdrop(event) {
    // console.log('dragdrop')
    if (droppedItem) {
        if (droppedItem.parentElement === draggedItem.parentElement) {
            const children = Array.from(droppedItem.parentElement.children);
            const draggedIndex = children.indexOf(draggedItem);
            const droppedIndex = children.indexOf(droppedItem);

            if (draggedIndex > droppedIndex) {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem);
            }
            else {
                draggedItem.parentElement.insertBefore(draggedItem,
                     droppedItem.nextElementSibling
                );
            }
        }
        else {
            this.insertBefore(draggedItem, droppedItem);
        }
    } else {
        if (this.dataset.zone === '4') {
            draggedItem.remove();
        }
        else {
            event.target.append(draggedItem);
        }
    }
    placeholders.forEach(x => x.classList.remove("hovered"))

}