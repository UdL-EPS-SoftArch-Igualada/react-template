import {getUserById} from "@/api/userApi";
import Link from "next/link";

export default async function UsersPage(props: { params: Promise<{ id: string }> }) {
    const user = await getUserById((await props.params).id);
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center w-full gap-6 text-center sm:items-start sm:text-left">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-semibold">{user.username}</h1>

                        {user.email && (
                            <p className="text-gray-700">
                                <strong>Email:</strong> {user.email}
                            </p>
                        )}

                        <p className="text-sm text-gray-400">
                            <strong>User URI:</strong> {user.link("self")?.href}
                        </p>

                        <Link
                            href="/users"
                            className="inline-block text-blue-600 hover:underline text-sm"
                        >
                            ← Back
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
