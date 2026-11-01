import React, { useEffect } from "react";
import "./Project.css";
import papa from "../assets/img/papa.png";
import pickdeal from "../assets/img/pickdeal.png";
import force1 from "../assets/img/force1.png";

const Project = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(".animate-text");
        const projectItems = document.querySelectorAll(".project-item");

        animatedElements.forEach(el => observer.observe(el));
        projectItems.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
            projectItems.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="project" id="project">
            <div className="project-inner">
                <div className="project-title">
                    <p className="subtitle">About the</p>
                    <h2 className="title">Project</h2>
                    <p className="title-text">UX 기획부터 설계까지 전 과정을 수행하였습니다</p>
                </div>

                <div className="project-container">
                    {/* 1. K-Brand Project (Website) */}
                    <div className="project-item kbrand">
                        <div className="sticky-side">
                            <div className="project-img-box">
                                <img src={papa} alt="Papa Project" />
                                <div className="project-hover-overlay">
                                    <button className="project-click-btn">click</button>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-side">
                            <div className="project-content">
                                <div className="project-detail-grid">
                                    <div className="grid-item overview animate-text">
                                        <h3>OVERVIEW</h3>
                                        <p>가치 소비를 지향하는 미닝아웃 시대에 발맞춰, 브랜드 '파파레서피'의 신뢰를 공고히 하고 본연의 가치를 극대화하기 위한 리브랜딩을 제안합니다.</p>
                                    </div>

                                    <div className="grid-item contribution animate-text">
                                        <h3>Contribution</h3>
                                        <div className="progress-group">
                                            <div className="progress-item">
                                                <span>기획</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "80%" }}></div></div>
                                                <span className="percent">80%</span>
                                            </div>
                                            <div className="progress-item">
                                                <span>디자인</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "30%" }}></div></div>
                                                <span className="percent">30%</span>
                                            </div>
                                            <div className="progress-item">
                                                <span>퍼블리싱</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "40%" }}></div></div>
                                                <span className="percent">40%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item process animate-text">
                                        <h3>PROCESS</h3>
                                        <p>제품의 정보 전달력을 높이고 브랜드 스토리를 강조하는 레이아웃을 통해 고객 경험을 개선하고, 일관된 톤앤매너로 브랜드 아이덴티티를 확립하였습니다.</p>
                                    </div>

                                    <div className="grid-item meta-group animate-text">
                                        <div className="meta-block">
                                            <h3>PARTICIPANTS</h3>
                                            <p>총 6명 (6인 팀 프로젝트)</p>
                                        </div>
                                        <div className="meta-block">
                                            <h3>PERIOD</h3>
                                            <p>2025.11.25 ~ 2025.12.29</p>
                                        </div>
                                        <div className="meta-block">
                                            <h3>TOOL</h3>
                                            <p>Midjourney, Figma, HTML, CSS, Javascript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-btns animate-text">
                                    <a
                                        href="https://www.figma.com/proto/qfe5do0OqwaHThxOBESAxa/kim-seung-yeon?node-id=1-3652&t=BQv0yuAvAZFb7S55-1"
                                        className="btn-ani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        view plan
                                    </a>
                                    <a
                                        href="https://solsol3318.github.io/ssol/"
                                        className="btn-ani visit-figma"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        visit website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Pick&Deal Project */}
                    <div className="project-item split">
                        <div className="sticky-side">
                            <div className="project-img-box">
                                <img src={pickdeal} alt="Pick&Deal Project" />
                                <div className="project-hover-overlay">
                                    <button className="project-click-btn">click</button>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-side">
                            <div className="project-content">
                                <div className="project-detail-grid">
                                    <div className="grid-item overview animate-text">
                                        <h3>OVERVIEW</h3>
                                        <p>기업은 협업할 작가를 찾고 조건을 확인하기 위해 반복적으로 문의해야 했고, 작가는 여러 채널로 들어오는 제안을 개별 관리해야 했습니다. 픽앤딜은 IP 탐색부터 협업 제안과 상태 확인까지 하나의 흐름으로 이어지도록 설계한 서비스입니다.</p>
                                    </div>

                                    <div className="grid-item contribution animate-text">
                                        <h3>Contribution</h3>
                                        <div className="progress-group">
                                            <div className="progress-item">
                                                <span>UI/UX 디자인</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "90%" }}></div></div>
                                                <span className="percent">90%</span>
                                            </div>
                                            <div className="progress-item">
                                                <span>서비스 기획</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "60%" }}></div></div>
                                                <span className="percent">60%</span>
                                            </div>
                                            <div className="progress-item">
                                                <span>마케팅</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "90%" }}></div></div>
                                                <span className="percent">90%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item process animate-text">
                                        <h3>PROCESS</h3>
                                        <p>기업과 작가의 이용 목적에 따라 사용자 흐름을 나누고, 각 단계에 필요한 정보와 행동을 중심으로 화면을 구성했습니다. 탐색·상세·제안·관리 화면의 UI/UX를 디자인하고, 화면별 기능과 동작 조건을 정리해 개발자와 협업했습니다.</p>
                                    </div>

                                    <div className="grid-item meta-group animate-text">
                                        <div className="meta-block">
                                            <h3>ROLE</h3>
                                            <p>사용자 흐름 및 화면 구조 설계<br />핵심 서비스 화면 UI/UX 디자인<br />개발 전달용 화면·동작 명세 정리<br />서비스 홍보 및 마케팅</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-btns animate-text">
                                    <a
                                        href="https://www.figma.com/proto/pmbX8NXpxyIDFvIA4G47pI/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-2026?node-id=583-8045&t=j5u6OIB8iQrSxBDc-1"
                                        className="btn-ani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        view plan
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Fandom Project (Force1) */}
                    <div className="project-item fandom">
                        <div className="sticky-side">
                            <div className="project-img-box">
                                <img src={force1} alt="Force1 Project" />
                                <div className="project-hover-overlay">
                                    <button className="project-click-btn">click</button>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-side">
                            <div className="project-content">
                                <div className="project-detail-grid">
                                    <div className="grid-item overview animate-text">
                                        <h3>OVERVIEW</h3>
                                        <p>Force1은 한국 F1 팬덤을 위한 몰입형 팬 경험 플랫폼으로, 팬들의 참여와 소통을 중심으로 UX를 설계했습니다. 직관적 데이터 시각화와 인터랙티브 요소를 통해 신규 팬과 매니아 모두 몰입할 수 있는 환경을 제공합니다.</p>
                                    </div>

                                    <div className="grid-item contribution animate-text">
                                        <h3>Contribution</h3>
                                        <div className="progress-group">
                                            <div className="progress-item">
                                                <span>기획</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "80%" }}></div></div>
                                                <span className="percent">80%</span>
                                            </div>
                                            <div className="progress-item">
                                                <span>디자인</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "40%" }}></div></div>
                                                <span className="percent">40%</span>
                                            </div>
                                            <div className="progress-item">
                                                <span>퍼블리싱</span>
                                                <div className="bar-bg"><div className="bar-fill" style={{ width: "40%" }}></div></div>
                                                <span className="percent">40%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item process animate-text">
                                        <h3>PROCESS</h3>
                                        <p>팬들의 경험과 행동을 관찰하며, 국내 F1 팬덤의 몰입과 소통에서 공통된 불편을 발견했습니다. 팬 활동 데이터를 분석하여, 누구나 쉽게 참여하고 서로 연결될 수 있는 몰입형 인터페이스와 개인 맞춤형 경험을 설계했습니다.</p>
                                    </div>

                                    <div className="grid-item meta-group animate-text">
                                        <div className="meta-block">
                                            <h3>PARTICIPANTS</h3>
                                            <p>총 7명 (7인 팀 프로젝트)</p>
                                        </div>
                                        <div className="meta-block">
                                            <h3>PERIOD</h3>
                                            <p>2026.01.02 ~ 2026.01.25</p>
                                        </div>
                                        <div className="meta-block">
                                            <h3>TOOL</h3>
                                            <p>Midjourney, Figma, React</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-btns animate-text">
                                    <a
                                        href="https://www.figma.com/proto/qfe5do0OqwaHThxOBESAxa/kim-seung-yeon?node-id=1-377&t=BQv0yuAvAZFb7S55-1"
                                        className="btn-ani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        view plan
                                    </a>
                                    <a
                                        href="https://force1-five.vercel.app/onboarding"
                                        className="btn-ani visit-figma"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        visit website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
