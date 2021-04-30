import { v4 as uuid} from 'uuid';
import moment from 'moment'; 


class ActorsData {
    constructor (fName, lName, bday, imgUrl, imbdLink){
        this.fName = fName;
        this.lName = lName;
        this.bday = moment(bday);
        this.imgUrl = imgUrl;
        this.imbdLink = imbdLink;
        this.id = uuid();
        this.calcAge = this.calculateAge();
    }

    calculateAge = () => {
        const currentDate = moment();
        return currentDate.diff(this.bday, 'years');
    }
}


export default ActorsData;

