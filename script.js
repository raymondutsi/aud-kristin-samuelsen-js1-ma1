const cats = [
    {
        
        
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1
const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList = "subheading";

// question 5
const paragraphs = document.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++){
   paragraphs [i].style.color = "red";
}

// question 6
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7
function printList(list) {
 for (var i = 0; i < list.length; i++)
 console.log (list[i].name);
}
printList (cats);


// question 8
function createCats(cats) {
    let returnHtml = "";
    for (var i = 0; i < cats.length; i++) {
        let ageString = cats[i].age;
        if (typeof ageString==="undefined") {ageString="Age unknown"};
        //returnHtml = returnHtml +"<div>"+"<h5>"+cats[i].name+"</h5>"+"<p>"+ageString+"</p>"+"</div>"       
        returnHtml = `${returnHtml}<div>
    <h5>${cats[i].name}</h5>
    <p>${ageString}</p>
</div>
`      
    }
    return returnHtml;
}

const catContainer = document.querySelector("div.cat-container");
catContainer.innerHTML = createCats(cats);


