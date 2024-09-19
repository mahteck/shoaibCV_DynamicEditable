window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    const nameDisplay = document.getElementById('nameDisplay') as HTMLElement;
    const emailDisplay = document.getElementById('emailDisplay') as HTMLElement;
    const educationDisplay = document.getElementById('educationDisplay') as HTMLElement;
    const experienceDisplay = document.getElementById('experienceDisplay') as HTMLElement;
    const skillsDisplay = document.getElementById('skillsDisplay') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get user input
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Set resume data
        nameDisplay.textContent = name;
        emailDisplay.textContent = email;
        educationDisplay.textContent = education;
        experienceDisplay.textContent = experience;
        skillsDisplay.textContent = skills.split(',').join(', ');
    });

    // Add editing functionality
    function makeEditable(element: HTMLElement, inputType: string = 'text') {
        element.addEventListener('click', () => {
            const currentValue = element.textContent || '';

            const input = document.createElement('input');
            input.type = inputType;
            input.value = currentValue;
            input.addEventListener('blur', () => {
                element.textContent = input.value;
            });
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    element.textContent = input.value;
                }
            });

            element.textContent = '';
            element.appendChild(input);
            input.focus();
        });
    }

    // Apply editable functionality to each section
    makeEditable(nameDisplay);
    makeEditable(emailDisplay, 'email');
    makeEditable(educationDisplay);
    makeEditable(experienceDisplay);
    makeEditable(skillsDisplay);
});
