export class AuthModel{
AuthTimeElapse:number= 20;

constructor
(
public IsAuthentic:boolean= false,
public AuthToken:string = ""
){}

}