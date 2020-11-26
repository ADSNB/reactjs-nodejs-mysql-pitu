import { Request, Response } from 'express';
import { Link } from '../models/link';
import linksRepository from "../models/linksRepository";

async function postLink(req: Request, res: Response) {
    const link = req.body as Link;
    link.code = generateCode();
    link.hits = 0;
    const result = await linksRepository.add(link);

    if (!result.id) return res.sendStatus(400);

    link.id = result.id;

    res.status(201).json(link);
}

async function getLink(req: Request, res: Response) {
    const code = req.params.code as string;
    const link = await linksRepository.findByCode(code);

    if (!link)
        res.sendStatus(404);
    else
        res.json(link);
}

async function hitLink(req: Request, res: Response) {
    const code = req.params.code as string;
    const link = await linksRepository.hit(code);

    if (!link) 
        res.sendStatus(404);
    else
        res.json(link);
}

//#region private methods
function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text;
}
//#endregion

export default {
    postLink,
    getLink,
    hitLink
}