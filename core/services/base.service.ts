import { to } from "await-to-js";
import { DeepPartial, Repository } from "typeorm";
import { IResponse, IResponseAll } from "../types";

export class BaseService<T> {
  constructor(private repo: Repository<T>) {}

  public async getAll(): Promise<IResponseAll<T>> {
    const [err, results] = await to(this.repo.find({}));
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
    const [err, results] = await to(
      this.repo.findOne({
        where: {
          id,
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
      results,
    };
  }

  public async post(entity: T): Promise<IResponse<T>> {
    const [err, results] = await to(this.repo.save(entity));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    return {
      status: 200,
      message: "ok",
      results,
    };
  }

  public async put(id: number, entity: T): Promise<IResponse<T>> {
    let [err, results] = await to(this.get(id));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    let data: T;
    if (results?.results) {
      data = results?.results;
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
    [err, res] = await to(this.repo.save(data));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    return {
      status: 200,
      message: "ok",
      results:res,
    };
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
    if (results?.results) {
      data = results?.results;
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
    [err, res] = await to(this.repo.save(data));
    if (err) {
      return {
        status: 500,
        message: err.message,
      } as IResponse<T>;
    }

    return {
      status: 200,
      message: "ok",
      results:res,
    };
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
    if (results?.results) {
      data = results?.results;
      
      let [errDelete, resultsDelete] = await to(this.repo.softDelete(data));
      if(errDelete){
        return {
          status: 500,
          message: "not found record",
        } as IResponse<T>;
      }else{
        return {
          status: 200,
          message: "ok",
          results:resultsDelete
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
