/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import Seller from '../models/Sellers';

export default class SellerController {
  public async getAll(request: Request, response: Response) {
    const sellers = await Seller.find({});

    response.json(sellers);
  }

  public async newSeller(request: Request, response: Response) {
    const { name, cep, whatsapp, category, createdAt } = request.body;

    const seller = await new Seller({
      name,
      cep,
      whatsapp,
      category,
      createdAt,
    });

    try {
      await seller.save();
      response.json(seller);
    } catch (error) {
      console.log('Deu ruim');
    }
  }
}
