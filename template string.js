const firstName = 'Wyngys';
const lastName = 'Qairkhan';
const age = 30;
let str ;

str = `
<ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>Age: ${age}</li>
</ul>
`;

document.body.innerHTML = str;
console.log(str);