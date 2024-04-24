import Mongoboi from "@/db/mongo"
import { headers } from "next/headers"


export default async function POST(req,res) 
{
    let session_id;
    //console.log(req.headers)
    if (req.headers.authorization) 
    {
        session_id = req.headers.authorization
        console.log("AUTH2: "+ session_id)
    }
    else
    {
        res.status(200).json({ found: false }); return;
    }

    const uri = "mongodb+srv://" + "vercel-admin-user" + ":" + "pokemonwithguns" + "@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
    const mongoboi = new Mongoboi(uri, "Users")
    const query = {
        session_id : session_id
    }
    const collectionName = "patients"
    let result
    try 
    {
        await mongoboi.connect()
        result = await mongoboi.findOne("patients", query)
    } catch (error) 
    {
        res.status(200).json({ found: false }); return;
    }
    finally
    {
        await mongoboi.disconnect()
    }

    if (result) {
        console.log("AUTH2: FOUND")
        res.status(200).json({ found: true }); return;
    }
    console.log("AUTH2: NOT FOUND")
    res.status(200).json({ found: false }); return;
}