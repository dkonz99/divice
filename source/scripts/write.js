export function write() {
    let call = document.querySelector(".main-button--call");
    let write = document.querySelector(".write-us");
    let close = document.querySelector(".write-us__close");
    let writeUsEmail = document.querySelector("[name=e-mail]");
    let writeUsName = document.querySelector("[name=name]");
    let writeUsButton = document.querySelector(".write-us__button");

    if (call) {
        call.addEventListener("click", function(evt) {
            evt.preventDefault();
            write.style.display = "block";
            write.classList.add("modal-show");
        })
        close.addEventListener("click", function(evt) {
            evt.preventDefault();
            write.style.display = "none";
            write.classList.remove("modal-show");
        });
        window.addEventListener("keydown", function(evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                write.style.display = "none";
                write.classList.remove("modal-show");
            }          
        });
        writeUsButton.addEventListener("click", function(evt) {  
            if (writeUsEmail.value == "" || writeUsName.value == "") {
            evt.preventDefault();   
            write.classList.add("modal-error");
            function writeErrorOff() {
            write.classList.remove("modal-error"); 
            write.classList.remove("modal-show");   
            write.style.display = "block";
            };
            setTimeout(writeErrorOff,600);
            }
        });
        
    }
    
}
    