import { applyDecorators, Get, Type } from "@nestjs/common";
import { ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { IResponse } from "../types/res.interface";

export const ApiGetAll = <TModel extends Type<any>>(
  model: TModel,
  path?: string
) => {
  return applyDecorators(
    Get(path || "/"),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(IResponse) },
          {
            properties: {
              results: {
                type: "array",
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    })
  );
};

export const ApiGet = <TModel extends Type<any>>(
  model: TModel,
  path?: string
) => {
  return applyDecorators(
    Get(path || "/"),
    ApiOkResponse({
      type: model,
    })
  );
};

export const ApiPost = <TModel extends Type<any>>(
  model: TModel,
  path?: string
) => {
  return applyDecorators(
    Get(path || "/"),
    ApiOkResponse({
      type: model,
    })
  );
};

export const ApiPut = <TModel extends Type<any>>(
  model: TModel,
  path?: string
) => {
  return applyDecorators(
    Get(path || "/"),
    ApiOkResponse({
      type: model,
    })
  );
};

export const ApiDelete = <TModel extends Type<any>>(
  model: TModel,
  path?: string
) => {
  return applyDecorators(
    Get(path || "/"),
    ApiOkResponse({
      type: model,
    })
  );
};
