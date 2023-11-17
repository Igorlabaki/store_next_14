import { PrismaClient, ProductCart } from '@prisma/client';
import { ICreateProductCartParams, IProductCartRepository, IUpdateQuantity, IVerifyIfProductAlreadyInCratParams } from '../IProductCartRepository';
import { ProductCartIncludeCartProduct } from '@/types';
import { IListByBrandId } from '../IProductRepository';


export class PrismaProductCartRepository implements IProductCartRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create({cartId,productId,quantity}: ICreateProductCartParams): Promise<ProductCartIncludeCartProduct | null> {
    const createProductCart = await this.prisma.productCart.create({
      data: {
        fk_id_product: productId,
        fk_id_cart: cartId,
        quantity,
      },
      include: {
        cart: true,
        product: true,
      },
  });
  return createProductCart
  }

  async delete(reference: string): Promise<ProductCartIncludeCartProduct | null> {
    return await this.prisma.productCart.delete({
      where: {
        id: reference,
      },
      include: {
        cart: true,
        product: true,
      },
    });
  }

  async deleteProduct(reference: string): Promise<ProductCart | null> {
    return await this.prisma.productCart.delete({
      where: {
        id: reference,
      },
    });
  }

  async getById(reference: string): Promise<ProductCart | null> {
    return await this.prisma.productCart.findFirst({
      where: {
        id: reference,
      },
    });
  }

  async list(search?: string): Promise<ProductCart[]> {
    return await this.prisma.productCart.findMany(); 
  }

  async updateQuantity({producCartId,quantity}: IUpdateQuantity): Promise<ProductCartIncludeCartProduct> {
    return await this.prisma.productCart.update({
      where:{
        id:producCartId
      },
      data:{
        quantity
      },
      include: {
        cart: true,
        product: true,
      },
    }); 
  }

  async listByCartId(cartId: string): Promise<ProductCart[]> {
    return await this.prisma.productCart.findMany({
      where:{
        fk_id_cart: cartId,
      }
    }); 
  }

  async verifyIfProductAlreadyInCart({cartId,productId}:IVerifyIfProductAlreadyInCratParams): Promise<ProductCartIncludeCartProduct | null>{

    if(!cartId){
      return null
    }

    return await this.prisma.productCart.findFirst({
      where: {
        cart: {
          id: cartId,
        },
        product: {
          id: productId,
        },
      },
      include: {
        product: true,
        cart: true
      },
    });
  }
}

