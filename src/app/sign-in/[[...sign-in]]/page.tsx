import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flexCenter h-[calc(100vh-96px)]">
            <SignIn />
        </div>
    )
}