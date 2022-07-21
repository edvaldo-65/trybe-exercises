import React, { Component } from 'react';

class About extends Component {

    render() {
        const skills = ["HTML", "CSS", "Javascript", "JSX"];
        const jsxSkills = skills.map((skill,index) => <li key={index}>{skill}</li>)
        return (
            <div>
                <h1>Edvaldo Alves do Nascimento</h1>
                <p>Aluno da Trybe - turma 23 - Tribo A</p>
                <h2>Minhas Habilidades</h2>
                <ul>{ jsxSkills }</ul>
            </div>);

    }

}

export default About;



