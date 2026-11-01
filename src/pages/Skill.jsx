import React from 'react';
import './Skill.css';

const allSkills = [
    "HTML", "CSS", "JS", "Jq", "FIGMA",
    "Ps", "Ai", "Pr", "NOTION", "REACT"
];

// 배열을 랜덤으로 섞는 함수
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const row1Base = shuffleArray(allSkills);
const row2Base = shuffleArray(allSkills);

const skillsRow1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
const skillsRow2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

const Skill = () => {
    return (
        <section className="skill-section">
            <div className="skill-wrapper">
                {/* 첫 번째 띠 (왼쪽 위 -> 오른쪽 아래 or 반대) */}
                <div className="skill-track track-1">
                    <div className="skill-content">
                        {skillsRow1.map((skill, i) => (
                            <div key={i} className="skill-icon">
                                <div className="skill-box">
                                    <span>{skill}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 두 번째 띠 (반대 방향) */}
                <div className="skill-track track-2">
                    <div className="skill-content reverse">
                        {skillsRow2.map((skill, i) => (
                            <div key={i} className="skill-icon">
                                <div className="skill-box">
                                    <span>{skill}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;