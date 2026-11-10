const invitation = 'Hola. Estoy probando Construcomp, una app Android para calcular materiales de construcción. ¿Me ayudas a probarla durante 14 días y contarme si encuentras errores?\n\nParticipar es gratis y no requiere comprar Pro ni dejar reseñas públicas. Aquí están los pasos para unirte al grupo de Construcomp, aceptar la prueba e instalar desde Google Play:\nhttps://miguelmarcanopaiva-png.github.io/construcomp/pruebas.html\n\nUsa la misma cuenta de Google en el grupo y en Play Store. Mantén la inscripción y la app instalada durante al menos 14 días seguidos, úsala en varias ocasiones con datos ficticios y cuéntame cómo te fue. Avísame cuando hayas aceptado la prueba e instalado la app. ¡Gracias!';
const button = document.getElementById('copy-invitation');
const status = document.getElementById('copy-status');
const text = document.getElementById('invitation-text');

button.addEventListener('click', async () => {
  text.value = invitation;
  text.hidden = false;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(invitation);
    status.textContent = 'Invitación copiada. Puedes pegarla en un mensaje.';
  } catch {
    text.hidden = false;
    text.focus();
    text.select();
    status.textContent = 'Selecciona y copia el texto de la invitación que aparece debajo.';
  }
});
