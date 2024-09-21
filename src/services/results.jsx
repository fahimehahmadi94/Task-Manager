import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://task-manager-d6149-default-rtdb.firebaseio.com/'
    }
)