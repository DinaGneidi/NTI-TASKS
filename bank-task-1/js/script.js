const addClientForm = document.querySelector("#addClient");
const tbody = document.querySelector("#tbodyOne")

const withdraw = document.getElementById("widthDraw")

const readFromLocalStorage = () => {
    let data

    try {
        data = JSON.parse(localStorage.getItem("clients"))
        if (!data || !Array.isArray(data)) throw new Error()
    } catch (e) {
        data = []
    }
    return data

}

const writeDataLocalStorage = (data) => {
    localStorage.setItem("clients", JSON.stringify(data))
}

const addClient = (client) => {
    let data = readFromLocalStorage()
    data.push(client)
    writeDataLocalStorage(data)

}
if (addClientForm) {
    addClientForm.addEventListener('submit', function(e) {
        e.preventDefault()
        const client = {
            id: Date.now(),
            accName: this.elements.accName.value,
            address: {
                city: this.elements.addressCity.value,
                street: this.elements.addressStreet.value,
                building: this.elements.addressBuilding.value
            },
            balance: this.elements.balanceAmount.value,
            transaction: []
        }
        addClient(client)
            //this.reset()
        window.location.replace("index.html")
    })

}

const createMyOwnElement = (parent, ele, txt = null, classes = null) => {
    myElement = document.createElement(ele)
    parent.appendChild(myElement)
    if (txt) myElement.textContent = txt
    if (classes) myElement.classList = classes
    return myElement
}

const showClients = (clients) => {
    tbody.textContent = "";
    clients.forEach((client, i) => {
        const tr = createMyOwnElement(tbody, "tr")
        for (item in client) {
            if ((item == "address") || (item == "balance") || (item == "transaction")) {} else {
                createMyOwnElement(tr, "td", client[item])
            }
        }
        const td = createMyOwnElement(tr, "td")

        const showBtn = createMyOwnElement(td, "button", "show", "btn btn-primary mx-2")
        showBtn.addEventListener("click", function(e) {
            const single = document.querySelector("#singleCard")
            const accName = document.querySelector('#showClient');
            const id = document.querySelector('#clientNumber')
            const address = document.querySelector('#clientAddress')
            const balance = document.querySelector('#totalBalance')

            const
                s = document.querySelectorAll(".showBtn")
            s.forEach((ss, ind) => { if (ind != i) ss.textContent = "show" })
            if (this.textContent == "show") {
                single.classList.remove('d-none')
                this.textContent = "hide"
                accName.textContent = client.accName
                id.textContent = client.id
                address.textContent = `${client.address.city} - ${client.address.building}-${client.address.street}`
                balance.textContent = `${client.balance}`
                localStorage.setItem("client", i)
            } else {
                single.classList.add('d-none')
                this.textContent = "show"
            }
        })

        const showAllBtn = createMyOwnElement(td, "button", "showAll", "btn btn-primary mx-2")
        showAllBtn.addEventListener("click", function(e) {
            localStorage.setItem("client", i)
            window.location.replace("showClient.html")
        })

        const withDrawBtn = createMyOwnElement(td, "button", "withDraw", "btn btn-danger mx-2")
        withDrawBtn.addEventListener("click", function(e) {
            localStorage.setItem("client", i)
            window.location.replace("withDraw.html")
        })

        const addBalance = createMyOwnElement(td, "button", "AddBalance", "btn btn-success mx-2")
        addBalance.addEventListener("click", function(e) {

            localStorage.setItem("client", client.id)
            window.location.replace("addAmount.html")
        })

    });
}
if (tbody) {
    let data = readFromLocalStorage()
    showClients(data);
}
const showSingleClient = document.querySelector("#sectionShowSingle");

if (showSingleClient) {
    const showSingleClientName = document.querySelector("#showClient");
    const showSingleClientNumber = document.querySelector("#clientNumber");
    const showSingleClientBalance = document.querySelector("#currentBalance");
    try {
        if (!localStorage.getItem("client")) window.location.replace("index.html")
        clients = readFromLocalStorage()
        const i = localStorage.getItem("client")
        console.log(clients[i].id)
        console.log(clients[i].accName)
        console.log(clients[i].balance)
        console.log(clients[i].address.city)
        console.log(showSingleClientNumber)
        showSingleClientName.textContent = clients[i].accName
        showSingleClientBalance.textContent = clients[i].balance
            // showSingleClientNumber.textContent = clients[i].balance

    } catch (e) {
        // window.location.replace("index.html")
    }
}

if (withdraw) {
    try {
        if (!localStorage.getItem("client")) window.location.replace("index.html")
        clients = readFromLocalStorage()
        const i = localStorage.getItem("client")
        withdraw.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log(this.elements.withdraw.value);
            const balance = Number(this.elements.withdraw.value);
            balanceLimit = Number(clients[i].balance);
            const trans = {
                type: "withdraw",
                amount: balance
            }
            if (balance < balanceLimit && balance > 200) {
                clients[i].transaction.push(trans);
                balanceLimit -= balance
                clients[i].balance = JSON.stringify(balanceLimit);
            } else {
                alert('you must widthdraw less than your current balance and more than 200-PLEASE TRY AGAIN')
            }
            writeDataLocalStorage(clients);
            window.location.replace("showClient.html");
            localStorage.removeItem("client");
        })

    } catch (e) {
        window.location.replace("showClient.html");
    }
}

if (withdraw) {
    try {
        if (!localStorage.getItem("client")) window.location.replace("index.html")
        clients = readFromLocalStorage()
        const i = localStorage.getItem("client")
        withdraw.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log(this.elements.withdraw.value);
            const balance = Number(this.elements.withdraw.value);
            balanceLimit = Number(clients[i].balance);
            const trans = {
                type: "withdraw",
                amount: balance
            }
            if (balance < balanceLimit && balance > 200) {
                clients[i].transaction.push(trans);
                balanceLimit -= balance
                clients[i].balance = JSON.stringify(balanceLimit);
            } else {
                alert('you must widthdraw less than your current balance and more than 200-PLEASE TRY AGAIN')
            }
            writeDataLocalStorage(clients);
            window.location.replace("showClient.html");
            localStorage.removeItem("client");
        })

    } catch (e) {
        window.location.replace("showClient.html");
    }
}

if (addAmount) {
    try {
        if (!localStorage.getItem("client")) window.location.replace("index.html")
        clients = readFromLocalStorage()
        const i = localStorage.getItem("client")
        withdraw.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log(this.elements.withdraw.value);
            const balance = Number(this.elements.withdraw.value);
            balanceLimit = Number(clients[i].balance);
            const trans = {
                type: "ADD",
                amount: balance
            }
            if (balance < 6000 && balance > 100) {
                clients[i].transaction.push(trans);
                balanceLimit += balance
                clients[i].balance = JSON.stringify(balanceLimit);
            } else {
                alert('please try again')
            }
            writeDataLocalStorage(clients);
            window.location.replace("showClient.html");
            localStorage.removeItem("client");
        })

    } catch (e) {
        window.location.replace("showClient.html");
    }
}


//const showSingleClient = document.querySelector('#showClient');

//const withdrawAmount = document.querySelector('addAmount-1');
//const addBalanceAmount = document.querySelector('addAmount-2');

//const accName = document.querySelector('#clientName');
//const accAddress = document.querySelector('#clientAddress');
//const accNumber = document.querySelector('#clientNumber');

//const accBalance = document.querySelector('#clientBalance');
//const tbodyTwo = document.querySelector('#transactions')







//const createMyOwnElement = (parent, element, txt = null, classes = null) => {
//myElement = document.createElement(element);
//parent.appendChild(myElement)
//if (classes) myElement.classList = classes
//if (txt) myElement.textContent = txt
//return myElement
//}




//const showSingle = (id) => {

//}

////if (showSingleClient) {
//if (!localStorage.getItem("clientId")) window.replace('index.html')
//const index = localStorage.getItem("clientId")
//const client = readFromLocalStorage()
//}


//if (withdrawAmount) {

//}
//if (addBalanceAmount) {

//}