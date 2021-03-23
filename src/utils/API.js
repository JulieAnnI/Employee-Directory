import axios from "axios";


const exportList = {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=50&seed=foobar&exc=login");
    }
};

export default exportList;