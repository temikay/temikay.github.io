const copyButtonLabel = "Copy Code";

let blocks = document.querySelectorAll('pre');

blocks.forEach((block) => {
    if (navigator.clipboard) {
        let button = document.createElement("button");
        button.innerHTML=copyButtonLabel;
        button.className="copy-code";

        button.addEventListener("click", copyCode);

        block.appendChild(button);
    }
});

async function copyCode(event) {
    const button =  event.srcElement;
    const pre =  button.parentElement;
    let code = pre.querySelector('code');


    let text = code.innerText;
    await navigator.clipboard.writeText(text);

    button.innerText= "Code Copied";
    button.className='copy-code';

    setTimeout(()=> {
        button.innerText = copyButtonLabel;
    },1000)
}