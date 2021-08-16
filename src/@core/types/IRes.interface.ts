import { ApiProperty } from "@nestjs/swagger";

export class IResponse<T>{
    
    @ApiProperty()
    status:number;

    @ApiProperty()
    message?:string;
    

    results?:Array<T>;
}