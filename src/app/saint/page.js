"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GotoHome } from '../components';
import { useTest } from '../context/context';
import { caution } from '../data';
import styles from './page.module.css';

function Caution() {
    return (
        <div className={styles.cautions}>
            {caution.map((item, index) => (
                <div key={index} className={styles.caution}>
                    <div>※</div><div>{item}</div>
                </div>
            ))}
        </div>
    );
}


export default function StartPoint () {
    const router = useRouter();

    const { userName, setUserName } = useTest();
    const [inputName, setInputName] = useState(userName);

    const handleSubmit = () => {
        console.log(inputName);
        setUserName(inputName ?? "사용자");
        router.push('/ontest');
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <GotoHome />
            </div>
            <div className={styles.title}>나와 닮은 <span className={styles.blue}>가톨릭 위인</span> 찾기</div>
            <div className={styles.saintImage}>
                <img src='/img/saintStartPoint.png' width='248' className={styles.image} />
                <div className={styles.whiteBlur}></div>
            </div>
            <div className={styles.nameAlert}>당신의 이름을 입력해주세요</div>
            <input 
                type='text'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder='이름'
                className={styles.inputBox}
            />
            <Caution />
            <div className={styles.buttonSet}>
                <button onClick={handleSubmit} className={styles.button}>
                    시작하기
                </button>
            </div>
        </div>
    )
}