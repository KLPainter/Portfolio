function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function switchPointers(target) {
    const nav = document.getElementsByTagName('nav');
    const spans = nav[0].getElementsByTagName('span');
    for(i = 0; i < spans.length; i++) {
        if(spans[i].id === `span-${target}`) {
            spans[i].classList.remove('hidden');
            spans[i].classList.add('visible');
        } else {
            spans[i].classList.remove('visible');
            spans[i].classList.add('hidden');
        }
    }
}