import { SignInButton, SignUpButton } from "@clerk/nextjs";

const NotSignedIn = () => {
    return (
        <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-center[-50] bg-no-repeat bg-[url('/workshop1.JPG')] bg-cover h-[100vh] overflow-hidden bg-purple-950/25 bg-blend-multiply">
            <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-foreground">
                <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-5xl text-center">Đăng nhập tài khoản để tiếp tục</h1>
                <div className="flex gap-3">
                    <div className="text-foreground bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 hover:scale-110 transition-all">
                        <SignInButton>Log In</SignInButton>
                    </div>
                    <div className="text-foreground border hover:border-0 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:scale-110 transition-all">
                        <SignUpButton>Sign Up</SignUpButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotSignedIn;