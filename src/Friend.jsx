export default function Friend({friend}) {
    console.log(friend);
    return (
        <div>
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email}</p>
        </div>
    )
}