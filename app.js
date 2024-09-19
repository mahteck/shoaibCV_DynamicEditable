window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var nameDisplay = document.getElementById('nameDisplay');
    var emailDisplay = document.getElementById('emailDisplay');
    var educationDisplay = document.getElementById('educationDisplay');
    var experienceDisplay = document.getElementById('experienceDisplay');
    var skillsDisplay = document.getElementById('skillsDisplay');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get user input
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Set resume data
        nameDisplay.textContent = name;
        emailDisplay.textContent = email;
        educationDisplay.textContent = education;
        experienceDisplay.textContent = experience;
        skillsDisplay.textContent = skills.split(',').join(', ');
    });
    // Add editing functionality
    function makeEditable(element, inputType) {
        if (inputType === void 0) { inputType = 'text'; }
        element.addEventListener('click', function () {
            var currentValue = element.textContent || '';
            var input = document.createElement('input');
            input.type = inputType;
            input.value = currentValue;
            input.addEventListener('blur', function () {
                element.textContent = input.value;
            });
            input.addEventListener('keypress', function (e) {
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
