const addElement = () => {
    // creating h1 tag
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'I am panghu gong';
    h1Element.setAttribute('class', 'name');
    document.body.appendChild(h1Element);

    // add image
    const imgDivElement = document.createElement('div');
    imgDivElement.setAttribute('class', 'main-img');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_10351.jpg');

    imgDivElement.appendChild(imgElement);
    document.body.appendChild(imgDivElement);

    const skillsList = ['Python', 'JavaScript', 'SQL', 'HTML'];
    const hobbiesList = ['playing video games', 'reading', 'jogging', 'traveling', 'food'];

    const newDate = new Date();
    const currentTime = newDate.toLocaleTimeString();
    const personList = ['I live in San Jose, CA', `It's current ${currentTime} here`];

    addComponent('main-skills', 'SKILLS', skillsList);
    addComponent('main-hobbies', 'HOBBIES', hobbiesList);
    addComponent('main-person', 'PERSON INFO', personList);

    const myInterval = setInterval(updateClock, 1000);
    // clearInterval(myInterval);
}

const addComponent = (divClassName, listName, contentList) => {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', divClassName);

    const divHeader = document.createElement('h2');
    divHeader.innerText = 'MY ' + listName + 'LIST: ';

    const ulElement = document.createElement('ul');
    ulElement.setAttribute('class', 'my-details');

    divElement.appendChild(divHeader);
    divElement.appendChild(ulElement);

    document.body.appendChild(divElement);

    contentList.forEach(el => {
        const newLiElement = document.createElement('li');
        newLiElement.innerText = el;
        newLiElement.setAttribute('class', 'detail');
        ulElement.appendChild(newLiElement);
    });
}

// const addClock = () => {
//     const clockElement = document.createElement('div');
//     clockElement.setAttribute('class', 'clock')
//     const newDate = new Date();
//     clockElement.innerText = newDate.toLocaleTimeString();
//     document.body.appendChild(clockElement);
// }

const updateClock = () => {
    const newDate = new Date();
    const newTime = newDate.toLocaleTimeString();
    const personElements = document.querySelectorAll('.main-person li');
    const lastIndex = personElements.length - 1;
    personElements[lastIndex].innerText = `it's current ${newTime} here`;
}


window.onload = () => addElement();

// window.onload = () => {

//     // Add four list items
//     const skillsElement = document.createElement('div');
//     skillsElement.setAttribute('class', 'main-skills');

//     const skillsHeader = document.createElement('h2');
//     skillsHeader.innerText = 'MY SKILLS LIST:';

//     const ulElement = document.createElement('ul');
//     const li1 = document.createElement('li');
//     li1.innerText = "PYTHON";
//     const li2 = document.createElement('li');
//     li2.innerText = "JAVASCRIPT";
//     const li3 = document.createElement('li');
//     li3.innerText = "SQL";
//     const li4 = document.createElement('li');
//     li4.innerText = "HTML";

//     ulElement.appendChild(li1);
//     ulElement.appendChild(li2);
//     ulElement.appendChild(li3);
//     ulElement.appendChild(li4);

//     skillsElement.appendChild(skillsHeader);
//     skillsElement.appendChild(ulElement);
//     document.body.appendChild(skillsElement);

//     // ADD 20 hobbies;
//     const hobbiesElement = document.createElement('div');
//     hobbiesElement.setAttribute('class', 'main-hobbies');
//     const hobbiesHeader = document.createElement('h2');
//     hobbiesHeader.innerText = 'MY HOBBIES LIST:';
//     const hobbiesUlElement = document.createElement('ul');
//     hobbiesUlElement.setAttribute('class', 'hobbies-ul');

//     hobbiesElement.appendChild(hobbiesHeader);
//     hobbiesElement.appendChild(hobbiesUlElement);
//     document.body.appendChild(hobbiesElement);


//     const hobbies = ['playing video games', 'reading', 'jogging', 'traveling', 'food'];

//     for (const hobby of hobbies) {
//         const newLiElement = document.createElement('li');
//         newLiElement.innerText = hobby;
//         document.querySelector('.hobbies-ul').appendChild(newLiElement);
//     }
// }
