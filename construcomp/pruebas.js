const invitation = "Hola. ¿Me ayudas a probar Construcomp en tu Android durante 14 días y contarme qué funciona o qué falla? Es gratis y no necesitas comprar ni dejar una reseña positiva.\n\nEmpieza en Google Play: https://play.google.com/apps/testing/ve.construcalc.app\n\nUsa la misma cuenta de Google en el navegador y en Play Store. Si Play no te da acceso, avísame para revisar tu inclusión en la lista de testers.\n\nMantente inscrito durante al menos 14 días seguidos, usa la app en varias ocasiones con datos de ejemplo y cuéntame tu experiencia. Avísame cuando la hayas instalado.\n\nA los primeros 12 participantes les entregaré manualmente un código de Construcomp Pro al cumplir los 14 días. El código se canjea y confirma en Google Play; aceptar la prueba no concede Pro automáticamente. ¡Gracias!";
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
