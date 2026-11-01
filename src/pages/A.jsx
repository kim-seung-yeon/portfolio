import React, { useState, useRef, useEffect } from 'react';
import './A.css';

// import papa_video from '../assets/video/papa_video.mp4';
import papa from '../assets/img/papa.png';
import force1 from '../assets/img/force1.png';
import split from '../assets/img/split.png';
import pickdeal from '../assets/img/pickdeal.png';
// Skill imports removed as they are unused in this component

// 영상: public/video/ 정적 경로
const papa_1 = '/video/papa_1.mp4';
const papa_2 = '/video/papa_2.mp4';
const papa_3 = '/video/papa_3.mp4';
const papa_4 = '/video/papa_4.mp4';
const force1_video = '/video/force1.mp4';
const split_video = '/video/split.mp4';

const A = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [videoIndex, setVideoIndex] = useState(0);
    const containerRef = useRef(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const isSmallMobile = typeof window !== 'undefined' && window.innerWidth <= 480;

    const papaVideos = [papa_1, papa_2, papa_3, papa_4];

    useEffect(() => {
        if (selectedCard?.id === 1) {
            setVideoIndex(0);
        }
    }, [selectedCard]);

    const handleVideoEnd = () => {
        setVideoIndex((prev) => (prev + 1) % papaVideos.length);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const element = containerRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress (0 to 1) based on sticky scroll
            const totalDistance = element.offsetHeight - windowHeight;
            let progress = -rect.top / totalDistance;
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Init

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cards = [
        {
            id: 1,
            key: "kbrand",
            content: papa,
            title: "K-Brand Rebranding",
            category: "WEB / MOBILE UI·UX",
            categoryMeta: "(6인 팀 프로젝트 / 2025.11.25.~12.29)",
            frontCategory: "WEB / MOBILE UI·UX",
            frontSubtitle: "K-Brand Rebranding",
            desc: "브랜드 '파파레서피'의 신뢰를 공고히 하고 본연의 가치를 극대화하기 위한 리브랜딩 제안입니다.",
            overview: "가치 소비를 지향하는 미닝아웃 시대에 발맞춰, 브랜드 '파파레서피'의 신뢰를 공고히 하고 본연의 가치를 극대화하기 위한 리브랜딩을 제안합니다.",
            contribution: [
                { label: "기획", value: "80%" },
                { label: "디자인", value: "30%" },
                { label: "퍼블리싱", value: "40%" }
            ],
            process: "제품의 정보 전달력을 높이고 브랜드 스토리를 강조하는 레이아웃을 통해 고객 경험을 개선하고, 일관된 톤앤매너로 브랜드 아이덴티티를 확립하였습니다.",
            tools: "Midjourney, Figma, HTML, CSS, Javascript",
            members: "총 6명 (6인 팀 프로젝트)",
            period: "2025.11.25 ~ 2025.12.29",
            role: "기획, 서브페이지 디자인 및 퍼블리싱",
            roleDetails: [
                { label: "Planning", desc: "데스크 리서치 및 현황 분석을 통한 사용자 인사이트 도출 및 AS-IS/TO-BE 전략 수립" },
                { label: "Design", desc: "무드보드 제작 및 컨셉 정의를 통한 서브 페이지 UI 디자인 (Figma)" },
                { label: "Publishing", desc: "서브 페이지 웹 퍼블리싱 및 HTML/CSS 화면 구현" },
                { label: "Communication", desc: "기획 전체 스토리라인 설계 및 프로젝트 최종 PT 진행" }
            ],
            color: "#FFCC33",
            planUrl: "https://www.figma.com/proto/qfe5do0OqwaHThxOBESAxa/kim-seung-yeon?node-id=1-3652&t=BQv0yuAvAZFb7S55-1",
            websiteUrl: "https://solsol3318.github.io/ssol/"
        },
        {
            id: 2,
            key: "pickdeal",
            content: pickdeal,
            title: "Pick&Deal",
            category: "WEB SERVICE UI·UX",
            categoryMeta: "(실무 프로젝트 / 2026.04~06)",
            frontCategory: "WEB SERVICE UI·UX",
            frontSubtitle: "Planning & Design",
            desc: "기업과 작가의 IP 협업을 연결하는 매칭 서비스",
            overview: "기업은 협업할 작가를 찾고 조건을 확인하기 위해 반복적으로 문의해야 했고, 작가는 여러 채널로 들어오는 제안을 개별 관리해야 했습니다. 픽앤딜은 IP 탐색부터 협업 제안과 상태 확인까지 하나의 흐름으로 이어지도록 설계한 서비스입니다.",
            contribution: [
                { label: "UI/UX 디자인", value: "90%" },
                { label: "서비스 기획", value: "60%" },
                { label: "마케팅", value: "90%" }
            ],
            process: "기업과 작가의 이용 목적에 따라 사용자 흐름을 나누고, 각 단계에 필요한 정보와 행동을 중심으로 화면을 구성했습니다. 탐색·상세·제안·관리 화면의 UI/UX를 디자인하고, 화면별 기능과 동작 조건을 정리해 개발자와 협업했습니다.",
            roles: [
                "사용자 흐름 및 화면 구조 설계",
                "핵심 서비스 화면 UI/UX 디자인",
                "개발 전달용 화면·동작 명세 정리",
                "서비스 홍보 및 마케팅"
            ],
            color: "#FFCC33",
            planUrl: "https://www.figma.com/proto/pmbX8NXpxyIDFvIA4G47pI/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-2026?node-id=583-8045&t=j5u6OIB8iQrSxBDc-1",
            websiteUrl: null
        },
        {
            id: 3,
            key: "fandom",
            content: force1,
            title: "Fandom Platform",
            category: "APP UI·UX",
            categoryMeta: "(7인 팀프로젝트 / 2026.01.02.~01.25)",
            frontCategory: "APP UI·UX",
            frontSubtitle: "Fandom Platform Planning & Design",
            desc: "Force1은 한국 F1 팬덤을 위한 몰입형 팬 경험 플랫폼으로, 팬들의 참여와 소통을 중심으로 UX를 설계했습니다.",
            overview: "Force1은 한국 F1 팬덤을 위한 몰입형 팬 경험 플랫폼으로, 팬들의 참여와 소통을 중심으로 UX를 설계했습니다. 직관적 데이터 시각화와 인터랙티브 요소를 통해 신규 팬과 매니아 모두 몰입할 수 있는 환경을 제공합니다.",
            contribution: [
                { label: "기획", value: "80%" },
                { label: "디자인", value: "40%" },
                { label: "퍼블리싱", value: "40%" }
            ],
            process: "팬들의 경험과 행동을 관찰하며, 국내 F1 팬덤의 몰입과 소통에서 공통된 불편을 발견했습니다. 팬 활동 데이터를 분석하여, 누구나 쉽게 참여하고 서로 연결될 수 있는 몰입형 인터페이스와 개인 맞춤형 경험을 설계했습니다.",
            tools: "Midjourney, Figma, React",
            members: "총 7명 (7인 팀프로젝트)",
            period: "2026.01.02 ~ 2026.01.25",
            role: "기획, 팀드라이버 페이지 디자인 및 퍼블리싱",
            roleDetails: [
                { label: "Planning", desc: "데스크 리서치 기반 UX 인사이트 도출 및 AS-IS/TO-BE 전략 수립" },
                { label: "Design", desc: "메인 레이아웃 설계 및 Team & Driver 페이지 UI 디자인 (Figma)" },
                { label: "Publishing", desc: "HTML/CSS/JS 활용 반응형 웹 구현 및 React 컴포넌트 설계" },
                { label: "Communication", desc: "프로젝트 전체 스토리라인 기획 및 최종 PT 진행" }
            ],
            color: "#FFCC33",
            planUrl: "https://www.figma.com/proto/qfe5do0OqwaHThxOBESAxa/kim-seung-yeon?node-id=1-377&t=BQv0yuAvAZFb7S55-1",
            websiteUrl: "https://force1-five.vercel.app/onboarding"
        }
    ];

return (
        <div className="a-container" ref={containerRef}>


            {/* Sticky Scroll Container */}
            <div className="card-scroll-container">
                <div className="project-title">
                    <p className='subtitle'>About the</p>
                    <h2 className='title'>Project</h2>
                    <p className='title-text'>UX 기획부터 설계까지 전 과정을 수행한 프로젝트입니다.</p>
                </div>
                <div className="card-sticky-wrapper">
                    {cards.map((card, index) => {
                        // 3 cards: -1, 0, 1 from center (index 1)
                        const offset = index - 1;

                        const baseRotate = isMobile ? 7 : 10;
                        const spreadRatio = isSmallMobile ? 0.15 : isMobile ? 0.18 : 0.25;
                        const baseX = window.innerWidth * spreadRatio;
                        const baseY = isMobile ? 15 : 30;

                        const rotate = offset * baseRotate * scrollProgress;
                        const x = offset * baseX * scrollProgress;
                        const y = Math.abs(offset) * baseY * scrollProgress;
                        const scale = isMobile
                            ? (0.7 + (0.3 * scrollProgress))
                            : (0.8 + (0.2 * scrollProgress));

                        return (
                            <div
                                key={card.id}
                                className="card-wrapper"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg) scale(${scale})`,
                                    zIndex: index === 1 ? 10 : 5,
                                    pointerEvents: 'auto'
                                }}
                                onClick={() => setSelectedCard(card)}
                            >
                                <div className={`card card-${index + 1}`}>
                                    <div className="card-inner">
                                        <div className="card-face card-front">
                                            <div className="card-bg-full" style={{ backgroundImage: `url(${card.content})` }}></div>
                                            <div className="card-initial-view">
                                                <h3 className="text-mask">
                                                    <span>{card.frontCategory || card.category}</span>
                                                    <span className="text-mask-title">{card.frontSubtitle || card.title}</span>
                                                </h3>
                                            </div>
                                            <div className="hover-btn">Click</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedCard && (
                <div className="project-modal-overlay" onClick={() => setSelectedCard(null)}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedCard(null)}>&times;</button>
                        <div className="modal-inner">
                            {selectedCard.key === "pickdeal" || selectedCard.id === 2 ? (
                                <div className="modal-pickdeal-container">
                                    <div className="modal-pickdeal-header">
                                        <div className="modal-category-wrap">
                                            <span className="modal-category">{selectedCard.category}</span>
                                            {selectedCard.categoryMeta && (
                                                <span className="modal-category-meta">{selectedCard.categoryMeta}</span>
                                            )}
                                        </div>
                                        <h1 className="modal-title-main">{selectedCard.title}</h1>

                                        <div className="modal-desc-row">
                                            <p className="modal-desc">{selectedCard.desc}</p>
                                            <div className="project-btns">
                                                {selectedCard.planUrl && (
                                                    <a
                                                        href={selectedCard.planUrl}
                                                        className="project-btn plan-btn"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        view plan
                                                    </a>
                                                )}
                                                {selectedCard.websiteUrl && (
                                                    <a
                                                        href={selectedCard.websiteUrl}
                                                        className="project-btn website-btn"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        visit website
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pickdeal-grid">
                                        {/* 왼쪽 위: OVERVIEW */}
                                        <div className="grid-item overview">
                                            <h3>OVERVIEW</h3>
                                            <p>{selectedCard.overview}</p>
                                        </div>

                                        {/* 오른쪽 위: CONTRIBUTION */}
                                        <div className="grid-item contribution">
                                            <h3>CONTRIBUTION</h3>
                                            <div className="progress-group">
                                                {selectedCard.contribution.map((item, idx) => (
                                                    <div className="progress-item" key={idx}>
                                                        <span className="label">{item.label}</span>
                                                        <div className="bar-bg">
                                                            <div className="bar-fill" style={{ width: item.value }}></div>
                                                        </div>
                                                        <span className="percent">{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* 왼쪽 아래: PROCESS */}
                                        <div className="grid-item process">
                                            <h3>PROCESS</h3>
                                            <p>{selectedCard.process}</p>
                                        </div>

                                        {/* 오른쪽 아래: ROLE */}
                                        <div className="grid-item role-pickdeal">
                                            <h3>ROLE</h3>
                                            <ul className="role-pickdeal-list">
                                                {selectedCard.roles.map((roleText, idx) => (
                                                    <li key={idx}>{roleText}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="modal-layout">
                                    <div
                                        className={`modal-left ${selectedCard.key === "fandom" ? "modal-vertical" : ""}`}
                                        style={{
                                            width: isMobile ? "100%" : (selectedCard.key === "fandom" ? "430px" : undefined)
                                        }}
                                    >
                                        {selectedCard.key === "kbrand" ? (
                                            <video
                                                key={videoIndex}
                                                ref={(el) => {
                                                    if (el) {
                                                        el.muted = true;
                                                        el.play().catch(() => {});
                                                    }
                                                }}
                                                src={papaVideos[videoIndex]}
                                                autoPlay
                                                muted
                                                playsInline
                                                preload="auto"
                                                onEnded={handleVideoEnd}
                                                onError={handleVideoEnd}
                                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                                            />
                                        ) : (
                                            <video
                                                ref={(el) => {
                                                    if (el) {
                                                        el.muted = true;
                                                        el.play().catch(() => {});
                                                    }
                                                }}
                                                src={force1_video}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                                            />
                                        )}
                                    </div>
                                    <div className="modal-right">
                                        <div className="modal-text">
                                            <div className="modal-category-wrap">
                                                <span className="modal-category">{selectedCard.category}</span>
                                                {selectedCard.categoryMeta && (
                                                    <span className="modal-category-meta">{selectedCard.categoryMeta}</span>
                                                )}
                                            </div>
                                            <h1 className="modal-title-main">{selectedCard.title}</h1>

                                            <div className="modal-desc-row">
                                                <p className="modal-desc">{selectedCard.desc}</p>
                                                <div className="project-btns">
                                                    {selectedCard.planUrl && (
                                                        <a
                                                            href={selectedCard.planUrl}
                                                            className="project-btn plan-btn"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            view plan
                                                        </a>
                                                    )}
                                                    {selectedCard.websiteUrl && (
                                                        <a
                                                            href={selectedCard.websiteUrl}
                                                            className="project-btn website-btn"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            visit website
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="project-detail-grid">
                                                <div className="grid-item overview">
                                                    <h3>OVERVIEW</h3>
                                                    <p>{selectedCard.overview}</p>
                                                </div>

                                                <div className="grid-item process">
                                                    <div className="process-block">
                                                        <h3>PROCESS</h3>
                                                        <p>{selectedCard.process}</p>
                                                    </div>
                                                </div>

                                                <div className="grid-item meta-group">
                                                    <div className="meta-block">
                                                        <h3>TEAM & PERIOD</h3>
                                                        <p>{selectedCard.members} &nbsp;|&nbsp; {selectedCard.period}</p>
                                                    </div>
                                                    <div className="meta-block">
                                                        <h3>TOOL</h3>
                                                        <p>{selectedCard.tools}</p>
                                                    </div>
                                                </div>

                                                <div className="grid-item contribution">
                                                    <h3>Contribution</h3>
                                                    <div className="progress-group">
                                                        {selectedCard.contribution.map((item, idx) => (
                                                            <div className="progress-item" key={idx}>
                                                                <span className="label">{item.label}</span>
                                                                <div className="bar-bg">
                                                                    <div className="bar-fill" style={{ width: item.value }}></div>
                                                                </div>
                                                                <span className="percent">{item.value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {selectedCard.roleDetails ? (
                                                    <div className="grid-item role-details">
                                                        <h3>ROLE DETAILS</h3>
                                                        <div className="role-details-list">
                                                            {selectedCard.roleDetails.map((detail, idx) => (
                                                                <div className="role-detail-item" key={idx}>
                                                                    <strong>{detail.label}</strong>
                                                                    <p>{detail.desc}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="grid-item role-details">
                                                        <h3>ROLE</h3>
                                                        <p>{selectedCard.role}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            </div>
    );
};

export default A;

