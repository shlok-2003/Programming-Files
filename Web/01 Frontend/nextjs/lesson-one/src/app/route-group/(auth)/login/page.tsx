export default function Login() {
    return (
        <>
            Login Page, it should have been /route-group/auth/login, but since we are grouping the route by using
            () curly brackets, it removes it from the routing

            thus, the route becomes /route-group/login
        </>
    )
}