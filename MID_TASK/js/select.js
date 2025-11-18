function addField() {
    const container = document.getElementById('fieldsContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'dynamicField[]';
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
}   

document.getElementById('addButton').addEventListener('click', addField);
