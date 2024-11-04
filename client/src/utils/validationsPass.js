// Validaciones de los campos
export default function validateForm(formData) {
  const errors = {}

  if (formData.newPassword.length < 6 || formData.newPassword.length > 14) {
    errors.newPassword =
      'La contraseña debe tener al menos 6 caracteres y no mas que 14.'
  }

  // Expresión regular para validar que la contraseña empieza con mayúscula y termina con un símbolo
  // const passwordRegex = /^[A-Z].*[!@#$%^&*()]$/;

  // Validar si la contraseña comienza con una mayúscula y termina con un símbolo
  // if (!passwordRegex.test(formData.newPassword)) {
  //     errors.newPassword = 'La contraseña debe comenzar con una mayúscula y terminar con un símbolo.';
  // }

  // Validar si las contraseñas coinciden
  if (formData.newPassword !== formData.confirmNewPassword) {
    errors.confirmNewPassword = 'Las contraseñas no coinciden.'
  }

  return errors
}
