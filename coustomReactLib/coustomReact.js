const reactElement={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    }
}
function coustomRender(reactElement,mainContainer){
const coustomElement=document.createElement(reactElement.type);
for (const prop in reactElement.props) {
    coustomElement.setAttribute(prop,reactElement.props[prop]);
}
coustomElement.innerHTML="Click Here!"
mainContainer.appendChild(coustomElement);
}
const mainContainer=document.querySelector("#root");
coustomRender(reactElement,mainContainer);
