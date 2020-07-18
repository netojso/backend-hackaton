/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import Client from '../models/Clients';
import Seller from '../models/Sellers';

export default class ClientController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async newClient(request: Request, response: Response) {
    const { name, cep } = request.body;

    const client = await new Client({
      name,
      cep,
    });

    try {
      await client.save();
      response.json(client);
    } catch (error) {
      console.log('Deu ruim');
    }
  }

  public async getItem(request: Request, response: Response) {
    const { item } = request.params;

    try {
      const data = await Seller.find();
      console.log(data);
      // eslint-disable-next-line no-shadow
      const product = data.find((prod: any) => prod.category.produtos === item);
      response.json(product);
    } catch (error) {
      console.log('Algo deu errado');
    }
  }
}
