import { to } from "await-to-js";
import { DeepPartial, IsNull, Repository } from "typeorm";
import { IResponse, IResponseAll } from "../types";

export class BaseService<T> {
  constructor(private repo: Repository<T>) {}

  public async getAll(): Promise<IResponseAll<T>> {
    const [err, results] = await to(this.repo.find({
      where:{
        deletedAt:IsNull()
      }
    }));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponseAll<T>;
    }

    return {
      status: 200,
      message: "ok",
      results,
    };
  }

  public async get(id: number): Promise<IResponse<T>> {
    const [err, result] = await to(
      this.repo.findOne({
        where: {
          id,
          deletedAt:IsNull()
        },
      })
    );
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    return {
      status: 200,
      message: "ok",
      result,
    };
  }

  public async post(entity: T): Promise<IResponse<T>> {
    (entity as any).insertedAt=new Date()
    const [err, result] = await to(this.repo.save(entity));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    return {
      status: 201,
      message: "ok",
      result,
    };
  }

  public async put(id: number, entity: T): Promise<IResponse<T>> {
    (entity as any).insertedAt=new Date()
    let [err, results] = await to(this.get(id));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    let data: T;
    if (results?.result) {
      data = results?.result;
      for (const key in entity) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = entity[key];
          data[key]=entity[key]
        }
      }
    }else{
      return {
        status: 404,
        message: "not found record",
      } as IResponse<T>;
    }

    let res;
    (data as any).updatedAt=new Date();
    [err, res] = await to(this.repo.update(id,data));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    if(res?.affected){
      return {
        status: 200,
        message: "ok",
      };
    }else{
      return {
        status: 500,
        message: 'error !.',
      } as IResponse<T>;
    }
  }

  public async patch(id: number, entity: DeepPartial<T>): Promise<IResponse<DeepPartial<T>>> {
    let [err, results] = await to(this.get(id));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    let data: DeepPartial<T>;
    if (results?.result) {
      data = results?.result;
      for (const key in entity) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = entity[key];
          data[key]=entity[key]
        }
      }
    }else{
      return {
        status: 404,
        message: "not found record",
      } as IResponse<T>;
    }

    let res;
    (data as any).updatedAt=new Date();
    [err, res] = await to(this.repo.update(id,data));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    if(res?.affected){
      return {
        status: 200,
        message: "ok",
      };
    }else{
      return {
        status: 500,
        message: 'error !.',
      } as IResponse<T>;
    }
  }

  public async delete(id: number): Promise<IResponse<T>> {
    let [err, results] = await to(this.get(id));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    let data: DeepPartial<T>;
    if (results?.result) {
      data = results?.result;
      (data as any).deletedAt=new Date();
      let [errDelete, resultsDelete] = await to(this.repo.update(id,data));
      if(errDelete){
        return {
          status: 500,
          message: "not found record",
        } as IResponse<T>;
      }else{
        return {
          status: 200,
          message: "ok",
        } as IResponse<T>;
      }

    }else{
      return {
        status: 404,
        message: "not found record",
      } as IResponse<T>;
    }
  }
}
