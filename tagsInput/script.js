let tags = [];

function addTag (e) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if(code != 13) {
        return;
    }

    let tag = e.target.value.trim();
    if(tag.length < 1 || tags.includes(tag)) {
        e.target.value = '';
        return;
    }

    let index = tags.push(tag);

    let tagItem = document.createElement('div');
    tagItem.classList.add('item');
    tagItem.innerHTML = `
        <span class='delete-btn' onClick="deleteTag(this,  '${tag}')">
            &times
        </span>
        <span>
            ${tag}
        </span>
    `;

    document.querySelector('.tag-input .tag-list').appendChild(tagItem);
    e.target.value = '';
}

function deleteTag (ref, tag) {
    let parent = ref.parentNode.parentNode;
    parent.removeChild(ref.parentNode);
    let index = tags.indexOf(tag);

    tags.splice(index);
}

document.querySelector('.tag-input input').addEventListener('keyup', addTag)