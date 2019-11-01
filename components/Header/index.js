// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div'),

        date = document.createElement('span'),
        h1 = document.createElement('h1'),
        temp = document.createElement('span');

    header.append(date);
    header.append(h1);
    header.append(temp);
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';
    return header;
}


document.querySelector('.header-container').append(Header());