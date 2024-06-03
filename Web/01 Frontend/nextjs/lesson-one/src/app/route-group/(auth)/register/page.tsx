export default function Register() {
    return (
        <>
            Register Page, it should have been /route-group/auth/register, but since we are grouping the route by using
            () curly brackets, it removes it from the routing

            thus, the route becomes /route-group/register
        </>
    )
}