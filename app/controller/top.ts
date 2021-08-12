import { Controller, Context } from 'egg';

export default class TopController extends Controller {
    public async index(ctx: Context) {
       console.log(11111, ctx)
       ctx.body = 'top205'
    }
  }