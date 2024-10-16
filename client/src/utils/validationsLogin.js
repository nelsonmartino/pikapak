// Validaciones de los campos
export default function validateForm(formData) {
    const errors = {};

    // Validación para el nombre
    const nameRegex = /^[A-Za-z\s]+$/; // Expresión regular que permite solo letras y espacios
    if (!formData.name.trim()) {
        errors.name = 'El nombre es obligatorio.';
    } else if (formData.name.length < 2) {
        errors.name = 'El nombre debe tener al menos 2 caracteres.';
    } else if (!nameRegex.test(formData.name)) {
        errors.name = 'El nombre no debe contener números ni caracteres especiales.';
    }

    // Validación para el nombre
    const surnameRegex = /^[A-Za-z\s]+$/; // Expresión regular que permite solo letras y espacios
    if (!formData.surname.trim()) {
        errors.surname = 'El apellido es obligatorio.';
    } else if (formData.name.length < 2) {
        errors.name = 'El apellido debe tener al menos 2 caracteres.';
    } else if (!surnameRegex.test(formData.surname)) {
        errors.surname = 'El apellido no debe contener números ni caracteres especiales.';
    }

    // Validación para el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Por favor, introduce un correo electrónico válido.';
    }

    // Validación para el WhatsApp (Argentina)
    const whatsappRegex = /^(\+54\s?)?(\d{10})$/; // Permite +54 opcional y 10 dígitos
    if (!formData.whatsapp.trim()) {
        errors.whatsapp = 'El número de WhatsApp es obligatorio.';
    } else if (!whatsappRegex.test(formData.whatsapp)) {
        errors.whatsapp = 'Por favor, introduce un número de WhatsApp válido de Argentina (ej: +54 9 11 1234-5678).';
    }


    if (formData.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    // Expresión regular para validar que la contraseña empieza con mayúscula y termina con un símbolo
    const passwordRegex = /^[A-Z].*[!@#$%^&*()]$/;

    // Validar si la contraseña comienza con una mayúscula y termina con un símbolo
    if (!passwordRegex.test(formData.password)) {
        errors.password = 'La contraseña debe comenzar con una mayúscula y terminar con un símbolo.';
    }

    // Validar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    return errors;
}

