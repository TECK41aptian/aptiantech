// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';

        faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none');
        answer.style.display = isOpen ? 'none' : 'block';
    });
});
