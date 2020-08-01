import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        const serielizedItems = items.map(item => {
            return { 
                id: item.id,
                title: item.title,
                image_url: `http://10.0.0.108:3333/assets/${item.image}`
             };
        });
    
        return res.json(serielizedItems)
    }
}

export default ItemsController;