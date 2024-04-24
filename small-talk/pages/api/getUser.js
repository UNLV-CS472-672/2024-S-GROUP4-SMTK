import UserStatus from '@/app/components/friends/UserStatus';
import Mongoboi from '@/db/mongo.js'
import { getUserByQuery } from '@/util/mongoUtils';

export const POST = async (req, res) => {
    if (req.headers) {
        let session_id;
        //console.log(req.headers)
        if (req.headers.authorization) 
        {
            session_id = req.headers.authorization
            console.log("AUTH2: "+ session_id)
        }
        const query = {
            session_id : session_id
        }

        const user = await getUserByQuery("Users", "patients", query);
        if (user){
            res.status(200).json(result); return;
        }
        res.status(200).json({found: false}); return;
    }
}

export default POST;