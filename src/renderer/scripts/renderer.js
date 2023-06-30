function alertError(message) {
    Toastify.toast({
        text: message,
        duration: 3000,
        close: false,
        style: {
            background: "red",
            color: "white",
            textAlign: "center",
        },
    });
}

function alertSuccess(message) {
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: "green",
            color: "white",
            textAlign: "center",
        },
    });
}

function handleFoldable(element) {
    element.addEventListener("click", function() {
        this.classList.toggle("open");
        var content = this.nextElementSibling;
        var parent = this.parentNode;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            if (parent.classList.contains("foldable-content")) {
                parent.style.maxHeight = parent.scrollHeight - content.scrollHeight + "px";;
            }
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            if (parent.classList.contains("foldable-content")) {
                parent.style.maxHeight = parent.scrollHeight + content.scrollHeight + "px";
            }
        }
    });
}

function handleFoldables() {
    var foldables = document.getElementsByClassName("foldable");
    var i;

    for (i = 0; i < foldables.length; i++) {
        handleFoldable(foldables[i]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleFoldables();
});
