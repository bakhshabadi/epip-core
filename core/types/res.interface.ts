import { ApiProperty } from "@nestjs/swagger";

export class IResponseAll<T>{
    
    @ApiProperty()
    status:number=0;

    @ApiProperty()
    message?:string;
    

    results?:T[];
}

export class IResponse<T>{
    
    @ApiProperty()
    status:number=0;

    @ApiProperty()
    message?:string;
    

    result?:T;
}