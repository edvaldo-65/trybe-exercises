import React, { Component } from 'react';

class About extends Component {

    render() {
        const skills = ["HTML", "CSS", "Javascript", "JSX"];
        const jsxSkills = skills.map((skill,index) => <li key={index}>{skill}</li>)
        return (
            <div>
                <h1>Terezinha Alves do Nascimento Fernandes</h1>
                <p>Aluna de Corte e costura - turma 23 - Tribo A</p>
                <h1>Mora atualmente em Surubim</h1>
                <ul>{ jsxSkills }</ul>
            </div>);

    }

}

export default About;



