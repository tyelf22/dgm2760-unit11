

async function getHotelData() {
    try {
        const response = await fetch('./hotel.json')
        return await response.json() //return the JSON object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}

getHotelData().then(data =>  hotelData = data)


let anchorElements = document.querySelectorAll("a")


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`

    document.querySelector('#address').textContent = hotelChoice.address
    document.querySelector('#rooms').textContent = hotelChoice.rooms
    document.querySelector('#gym').textContent = hotelChoice.gym
    document.querySelector('#type').textContent = hotelChoice.roomType.join(', ')
    document.querySelector('#hotelImage').src = `./images/${hotelChoice.picture}`
    console.log(hotelChoice.picture)

}

anchorElements.forEach(element => {
    addEventListener('click', hotelInfo)
});

