// Validaciones de los campos
export default function validateForm(formData) {
  const errors = {}

  // Validación para el email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.'
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Por favor, introduce un correo electrónico válido.'
  }

  if (!formData.password.trim()) {
    errors.password = 'La contraseña es obligatoria.'
  }

  //   if (formData.password.length < 6 || formData.password.length > 14) {
  //     errors.password = 'Por favor, introduce una contraseña válida.'
  //   }

  // Expresión regular para validar que la contraseña empieza con mayúscula y termina con un símbolo
  //   const passwordRegex = /^[A-Z].*[!@#$%^&*()]$/

  // Validar si la contraseña comienza con una mayúscula y termina con un símbolo
  //   if (!passwordRegex.test(formData.password)) {
  //     errors.password =
  //       'La contraseña debe comenzar con una mayúscula y terminar con un símbolo.'
  //   }

  return errors
}
