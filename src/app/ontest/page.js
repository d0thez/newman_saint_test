"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "../context/context";
import { questions } from '../data';
import styles from './page.module.css';

function TestHeader ({ page, total }) {
    return (
    <div className={styles.testHeader}>
        <div onClick={() => router.back()} className={styles.goBack}>
            뒤로가기
        </div>
        <div className={styles.pageNumber}>
            <span>{page}/{total}</span>
        </div>
    </div>
    )
}

function Answers({ contents, scale, handleAnswer }) {
    return (
        <div className={styles.buttonSet}>
            {contents.map((item, index) => (
                <div key={index}>
                    <button onClick={() => handleAnswer(scale, item.weight)} className={styles.button}>
                        {item.answer}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default function Test () {
    const { traits, setTraits } = useTest();
    const [idx, setIdx] = useState(0);
    const router = useRouter();

    useEffect(() => {
        console.log("Updated traits:", traits);
    }, [traits]);

    const handleAnswer = (scale, weight) => {
        setTraits((prev) => {
            console.log("Previous traits:", prev);
            const updatedTraits = { ...prev, [scale]: prev[scale] + weight };
            console.log("New traits:", updatedTraits);
            return updatedTraits;
        });

        if (idx < questions.length - 1) {
            setIdx(idx + 1);
        } else {
            router.push("/result");
        }
    };
    
    const { scale, question, answers } = questions[idx];
    
    return (
        <div className={styles.page}>
            <TestHeader page={idx + 1} total={questions.length} />
            <div className={styles.question}>{question}</div>
            <Answers contents={answers} scale={scale} handleAnswer={handleAnswer} />
        </div>
    )
}