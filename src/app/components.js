"use client";
import { useRouter } from "next/navigation";
import Link from 'next/link'

export function Button({content, href = '/'}) {
    return (
        <Link href={href}><button>{content}</button></Link>
    )
};

export function GotoHome() {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/')} >
            홈으로
        </div>
    );
}
export function GoBack() {
    const router = useRouter();

    return (
        <div onClick={() => router.back()} style={{ cursor: "pointer" }} >
            뒤로가기
        </div>
    );
}