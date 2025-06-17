const test = [
    { name: 'title1', art: 'aaaa', id: 0 },
    { name: 'title2', art: 'aaaa', id: 1 },
    { name: 'title3', art: 'aaaa', id: 2 },
    { name: 'title4', art: 'aaaa', id: 3 },
    { name: 'title5', art: 'aaaa', id: 4 },
    { name: 'title6', art: 'aaaa', id: 5 },
    { name: 'title7', art: 'aaaa', id: 6 },
    { name: 'title8', art: 'aaaa', id: 7 },
    { name: 'title9', art: 'aaaa', id: 8 }
];

let text = 'title4';

test.forEach((t) => {
    console.log(t.name);
})


for(let i = 0; i< test.length; i++) {
    console.log(test[i].name);
    
}

