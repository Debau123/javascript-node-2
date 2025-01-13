import { listUsers} from "@/app/lib/bd";

export async function GET(){

    const users = await listUsers();
    return Response.json(users);

}