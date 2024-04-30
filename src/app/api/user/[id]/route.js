import { NextResponse } from "next/server";

export function GET(request ,{params}){
    const {id} = params
    return NextResponse.json({'message':"hello"})

}

