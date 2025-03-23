"use client";
import styles from "./page.module.css";
import { sedtua } from '../data'
import { GotoHome } from '../components';
import { useRouter } from "next/navigation";

export default function SedTua() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <GotoHome />
      </div>
      <div className={styles.whatIsSedtua}>
        <div className={styles.WhatIsSedtuaLat}>
            <span>Quid est </span>
            <span>
              <span className={styles.sedtua}>SANARAE</span>
              <span>?</span>
            </span>
        </div>
        <div className={styles.WhatIsSedtuaKr}>사나래가 무엇인가요?</div>
      </div>
      <div className={styles.sedtuaDescription}>
      🙏 [사나래란?]<br />
KAIST의 유일한 가톨릭 동아리로, 1986년 창단되어 현재까지 사랑이 이어져오고 있는 ‘신앙공동체’입니다! 동아리 이름인 ‘사나래’는 천사의 날개라는 뜻으로, ‘사나래‘를 통해 하느님과 함께하는 시간을 소중히 여기며, 세상에서의 만족을 얻기 위하여 항상 쉼없이 달려가기 보다는 잠시나마 한 걸음 멈추고 사랑을 실천하는 작은 천사들이 되보는 것 어떨까요?
<br /><br />
🦋 [사나래의 부원은?]<br />
한 학기 동안 매주 월요일 오후 9시에 정기 모임을 진행하며, 한 주간 동안의 하느님 체험을 ’나눔’하며 행복을 주고받습니다! 또, 일주일에 한 번 자유로운 시간에 부원분들끼리 일정을 맞추어, 그 주 주일의 복음 말씀을 함께 읽고 묵상한 것을 ‘나눔‘하는 명례방 활동을 합니다! 또한 ‘청년성서모임‘을 통해서 창세기, 탈출기 등 하느님 말씀을 ‘듣고’ 삶 속에서 실천하기 위하여 노력하며, 궁동성당 청년회 활동에 참여하기도 하며 함께 신앙생활과 봉사를 실천합니다!
<br /><br />
🌈 [사나래의 다양한 활동]<br />
학교에서 매 학기 시작과 마지막을 개강미사, 종강미사와 함께 시작하고 맺을 수 있으며 딸기파티, 마니또, 축일축하, MT와 여행, 성가발표회 등 다양한 활동을 진행합니다! 또한 시간 가능하신 분들끼리 매주 일요일마다 함께 청년미사에 가서 미사드리며, 성당과 동방에서 재미있는 시간을 보내기도 하며 행복을 나눕니다!

      </div>
    </div>
  );
}