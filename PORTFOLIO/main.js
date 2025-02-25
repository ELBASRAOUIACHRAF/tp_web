
function showrepo(id) {
    document.getElementById(id).style.display = "block";
}

function hiderepo(id) {
    document.getElementById(id).style.display = "none";
}





document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire si une erreur existe
        
        let isValid = true;

        // Récupération des champs
        const firstName = document.querySelector("input[placeholder='First Name']");
        const lastName = document.querySelector("input[placeholder='Last Name']");
        const gender = document.querySelector("input[placeholder='Gender']");
        const dob = document.querySelector("input[type='date']");
        const email = document.querySelector("input[type='email']");
        const phone = document.querySelector("input[placeholder='Phone number']");
        const password = document.querySelector("input[placeholder='Password']");
        const confirmPassword = document.querySelector("input[placeholder='Confirm Password']");
        const image = document.getElementById("image");

        // Expressions régulières
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,30}$/;
        const genderRegex = /^(Male|Female)$/i;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        const imageRegex = /\.(jpg|jpeg|png|gif)$/i;

        // Fonction de validation
        function validateField(field, regex, errorMessage) {
            if (!regex.test(field.value.trim())) {
                alert(errorMessage);
                field.focus();
                return false;
            }
            return true;
        }

        // Vérification des champs
        if (!validateField(firstName, nameRegex, "Le prénom doit contenir uniquement des lettres (2-30 caractères).")) isValid = false;
        if (!validateField(lastName, nameRegex, "Le nom doit contenir uniquement des lettres (2-30 caractères).")) isValid = false;
        if (!validateField(gender, genderRegex, "Le genre doit être 'Male', 'Female'.")) isValid = false;
        if (!dob.value) {
            alert("Veuillez entrer votre date de naissance.");
            dob.focus();
            isValid = false;
        }
        if (!validateField(email, emailRegex, "Veuillez entrer une adresse email valide.")) isValid = false;
        if (!validateField(phone, phoneRegex, "Le numéro de téléphone doit contenir 10 chiffres.")) isValid = false;
        if (!validateField(password, passwordRegex, "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.")) isValid = false;
        if (confirmPassword.value !== password.value) {
            alert("Les mots de passe ne correspondent pas.");
            confirmPassword.focus();
            isValid = false;
        }

        if (image.files.length > 0 && !imageRegex.test(image.files[0].name)) {
            alert("Le fichier doit être une image (JPG, JPEG, PNG, GIF).");
            image.focus();
            isValid = false;
        }

        if (isValid) {
            alert("Registration successful!");
            form.submit();
            window.location.href = "index.html"
        }
    });
});
