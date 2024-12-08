import Link from "next/link";

export default function Login() {
    return (
        <>
            <h1>login</h1>
            <Link href="/register">register</Link>
            <Link href="/forget-password">forget password</Link>
        </>
    );
}