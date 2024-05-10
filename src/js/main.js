const axios = require('axios').default;

const titleElement = document.querySelector('.vacancies-card__name');
const salaryElement = document.querySelector('.vacancies-card__salary');
const companyElement = document.querySelector('.vacancies-card__company');
const locationElement = document.querySelector('.vacancies-card__location');
const experienceElement = document.querySelector('.vacancies-card__experience');

function processData(data) {
    const { name, salary, employer, address, experience } = data;
    const salaryText = salary ? `от ${salary.from} до ${salary.to}` : 'Зарплата не указана';
    
    return {
        title: name,
        salary: salaryText,
        company: employer.name,
        location: address ? address.city : 'Местоположение не указано',
        experience: experience ? experience.name : 'Опыт не указан'
    };
}

function renderData(data) {
    titleElement.textContent = data.title;
    salaryElement.textContent = data.salary;
    companyElement.textContent = data.company;
    locationElement.textContent = data.location;
    experienceElement.textContent = data.experience;
}

axios
    .get('https://api.hh.ru/vacancies/93423389')
    .then((response) => {
        const processedData = processData(response.data);
        renderData(processedData);
    })
    .catch((error) => {
        console.error('Произошла ошибка при загрузке данных:', error);
    });