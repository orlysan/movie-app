
class ActorsData {
    constructor (fName, lName, bday, imgUrl, imbdLink){
        this.fName = fName;
        this.lName = lName;
        this.bday = bday;
        this.imgUrl = imgUrl;
        this.imbdLink = imbdLink
    }

    calculateAge = () => {
        const currentDate = new Date().getDate();
        const age = currentDate - this.bday;
        return age;
    }
}


export default ActorsData;