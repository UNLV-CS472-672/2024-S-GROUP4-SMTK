import Mongoboi from "@/db/mongo"
import { headers } from "next/headers"
import { NextResponse } from "next/server";

export default async function POST(req,res) 
{
    let session_id;
    if (req.headers.authorization) {
        session_id = req.headers.authorization
    }
    const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
    const mongoboi = new Mongoboi(uri, "Users")
    const query = {
        session_id : session_id
    }
    const collectionName = "patients"
    await mongoboi.connect()
    const result = await mongoboi.findOne("patients", query)
    await mongoboi.disconnect()
    if (result == null) { res.status(200).json({ found: false }); return; }
    res.status(200).json({ found: true })
}