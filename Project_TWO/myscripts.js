class Villager {
    constructor(
        name = 'Unknown',
        type = 'Unknown',
        personality = 'Unknown',
        gifted = 'no',
        img_ref = ''
    ) {
        this.name = name
        this.type = type
        this.personality = personality
        this.gifted = gifted
        this.img_ref = img_ref
    }
}

let arrayVillagers = [
    {
        name: "Erik",
        type: "Deer",
        personality: "lazy",
        gifted: "no",
        img_ref: "/villager-images/150px-Erik_NH.png"
    },
    {
        name: "Goldie",
        type: "Dog",
        personality: "happy",
        gifted: "yes",
        img_ref: "/villager-images/150px-Erik_NH.png"
    }
]

let elGrid = document.getElementById("grid");

function createVillagerCard(villager) {
    const villagerCard = document.createElement('div')
    villagerCard.classList.add('villager-card')

    const elImage = document.createElement('img')
    const elName = document.createElement('p')
    const elType = document.createElement('p')
    const elPersonality = document.createElement('p')
    const elGifted = document.createElement('p')

    elImage.setAttribute('src', villager.img_ref)
    elName.textContent = villager.name
    elType.textContent = `Type: ${villager.type}`
    elPersonality.textContent = `Personality: ${villager.personality}`
    elGifted.textContent = `Gifted: ${villager.gifted}`

    villagerCard.appendChild(elImage)
    villagerCard.appendChild(elName)
    villagerCard.appendChild(elType)
    villagerCard.appendChild(elPersonality)
    villagerCard.appendChild(elGifted)
    elGrid.appendChild(villagerCard);
}
function updateGrid() {
    arrayVillagers.forEach( (villager) => {
        createVillagerCard(villager);
    })
}

function createVillagerObject() {
    // create Object 
    // object.name = form.name
    //arrayVillagers.append(object);

    const newVillager = new Object();

    const formName = document.getElementById('name').value
    newVillager.name = formName;

    arrayVillagers.push(newVillager);

    updateGrid();
    //let newVillager = new Villager(formName, formType)

    //alert("hello");
}

updateGrid();