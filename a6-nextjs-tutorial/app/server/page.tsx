import { listUsers} from "@/app/lib/bd";

export default async function Page() {
    const users = await listUsers();

  return (
    <>
      <h1>Estos son los Customers</h1>
      {
        users.map((user) => (
          <p key={user.name}>{user.name}</p>
        ))
      }
    </>
  )
}