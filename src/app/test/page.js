"use client"
import { useRef, useState } from "react";

export default function ShareToInstagram() {
    const canvasRef = useRef(null);
    const [updatedImage, setUpdatedImage] = useState(null);
    
    // 텍스트 변경 후 이미지 생성 함수
    const generateImage = (newName) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        img.src = "/img/share/CFDE.png";
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            
            // 기존 이미지 그리기
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            // 텍스트 스타일 설정
            ctx.font = "64px Arial";
            ctx.fillStyle = "#000"; // 검정색 텍스트
            ctx.textAlign = "center";
            
            // 기존 텍스트 위치에 새로운 텍스트 삽입
            ctx.fillText(newName + "님과 닮은 위인은", img.width / 2, 400);
            
            // 수정된 이미지 URL 가져오기
            const newImage = canvas.toDataURL("image/png");
            setUpdatedImage(newImage);
        };
    };

    // 인스타그램 스토리 공유 함수
    const shareToInstagram = () => {
        if (!updatedImage) return;

        const blob = dataURLtoBlob(updatedImage);
        const file = new File([blob], "shared-image.png", { type: "image/png" });

        const formData = new FormData();
        formData.append("file", file);
        
        const instagramIntent = `intent://story_camera#Intent;package=com.instagram.android;scheme=https;end;`;
        window.location.href = instagramIntent;
    };

    // Data URL -> Blob 변환 함수
    const dataURLtoBlob = (dataURL) => {
        const byteString = atob(dataURL.split(",")[1]);
        const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
        }
        return new Blob([uint8Array], { type: mimeString });
    };

    return (
        <div className="flex flex-col items-center">
            <canvas ref={canvasRef} className="hidden"></canvas>
            <button
                onClick={() => generateImage("홍길동")} // 변경할 이름
                className="bg-blue-500 text-white p-2 rounded mt-4"
            >
                이미지 생성하기
            </button>
            {updatedImage && (
                <button
                    onClick={shareToInstagram}
                    className="bg-purple-500 text-white p-2 rounded mt-4"
                >
                    인스타그램으로 공유하기
                </button>
            )}
        </div>
    );
}
