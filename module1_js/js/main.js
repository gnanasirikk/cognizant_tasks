// Exercise 1

console.log(
    "Welcome to the Community Portal"
);

window.onload = function(){

    alert(
        "Page Fully Loaded"
    );
};

// Exercise 2

const eventName =
    "Music Night";

const eventDate =
    "2026-07-15";

let seats = 20;

console.log(
    `${eventName}
     ${eventDate}
     Seats:${seats}`
);

seats--;

// Exercise 5

class Event{

    constructor(
        id,
        name,
        category,
        seats
    ){

        this.id=id;
        this.name=name;
        this.category=category;
        this.seats=seats;
    }
}

Event.prototype
.checkAvailability=function(){

    return this.seats > 0;
};

// Exercise 6

let events = [

    new Event(
        1,
        "Music Night",
        "Music",
        20
    ),

    new Event(
        2,
        "Baking Workshop",
        "Workshop",
        10
    )
];

// push()

events.push(

    new Event(
        3,
        "Rock Show",
        "Music",
        30
    )
);

// filter()

let musicEvents =

events.filter(

    e => e.category==="Music"
);

console.log(
    musicEvents
);

// map()

let cards =

events.map(

    e =>
    `Workshop on ${e.name}`
);

console.log(cards);

// Exercise 4

function addEvent(event){

    events.push(event);
}

function registerUser(name){

    console.log(
        `${name}
        registered`
    );
}

function filterEventsByCategory(

    category,
    callback

){

    let result =

    events.filter(

        e =>
        e.category===category
    );

    callback(result);
}

// Closure

function categoryCounter(){

    let count=0;

    return function(){

        count++;

        return count;
    };
}

const trackRegistration =

categoryCounter();

// Exercise 7

function displayEvents(

    eventList

){

    let container =

    document.querySelector(

        "#eventContainer"
    );

    container.innerHTML="";

    eventList.forEach(

        event=>{

            let card =

            document.createElement(

                "div"
            );

            card.className =
            "event-card";

            card.innerHTML =

            `
            <h3>${event.name}</h3>
            <p>${event.category}</p>
            <p>Seats:
            ${event.seats}</p>

            <button
            onclick="registerEvent(${event.id})">

            Register

            </button>
            `;

            container.appendChild(
                card
            );
        }
    );
}

// Exercise 8

function registerEvent(id){

    alert(
        `Registered for event ${id}`
    );
}

document
.querySelector(
"#categoryFilter"
)

.onchange = function(){

    let value =
    this.value;

    if(value==="all"){

        displayEvents(events);
    }

    else{

        displayEvents(

            events.filter(

                e=>
                e.category===value
            )
        );
    }
};

document
.querySelector(
"#searchBox"
)

.addEventListener(

"keydown",

function(){

    let keyword =

    this.value.toLowerCase();

    let filtered =

    events.filter(

        e=>

        e.name
        .toLowerCase()
        .includes(keyword)
    );

    displayEvents(filtered);
}
);

// Exercise 3

function validateEvents(){

    try{

        events.forEach(

            e=>{

                if(
                    e.seats<=0
                ){

                    throw new Error(
                        "No Seats Available"
                    );
                }
            }
        );

    }

    catch(error){

        console.log(
            error.message
        );
    }
}

// Exercise 9

document
.getElementById(
"loadBtn"
)

.onclick = async function(){

    let spinner =

    document.getElementById(
        "spinner"
    );

    spinner.innerText =
    "Loading...";

    try{

        let response =

        await fetch(
        "data/events.json"
        );

        let data =

        await response.json();

        spinner.innerText="";

        displayEvents(data);
    }

    catch(error){

        spinner.innerText=
        "Error Loading Data";
    }
};

// Exercise 10

function showEvent(

    {
        name,
        category
    }

){

    console.log(
        name,
        category
    );
}

let clone =

[...events];

// Exercise 11

document
.getElementById(
"registrationForm"
)

.addEventListener(

"submit",

function(event){

    event.preventDefault();

    let form =
    event.target;

    let name =
    form.elements.name.value;

    let email =
    form.elements.email.value;

    let selected =
    form.elements.event.value;

    let message =

    document.getElementById(
        "message"
    );

    if(

        name==="" ||

        email==="" ||

        selected===""

    ){

        message.className =
        "error";

        message.innerText =
        "Fill all fields";

        return;
    }

    message.className =
    "success";

    message.innerText =
    "Registration Successful";

    submitToServer({
        name,
        email,
        selected
    });
});

// Exercise 12

function submitToServer(data){

    console.log(data);

    setTimeout(

        ()=>{

            fetch(

                "https://jsonplaceholder.typicode.com/posts",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                        "application/json"
                    },

                    body:
                    JSON.stringify(data)

                }

            )

            .then(

                response=>
                response.json()

            )

            .then(

                data=>{

                    console.log(
                        "Success",
                        data
                    );
                }

            )

            .catch(

                error=>{

                    console.log(
                        error
                    );
                }
            );

        },

        2000
    );
}

// Exercise 13

console.log(
    "Debug Start"
);

// Exercise 14

$("#registerBtn")
.click(function(){

    $("#eventContainer")
    .fadeOut(500)
    .fadeIn(500);
});

console.log(
"React/Vue provide reusable components and state management."
);