export interface CustomAlertProps {
  visible?: boolean | undefined; // Controla la visibilidad del Alert
  onDismiss?: () => void; // Cierra el Alert
  title?: string; // Título del Alert
  message?: string; // Mensaje del Alert
  icon?: string; // Ícono opcional para el Alert
  confirmText?: string; // Texto opcional del botón de confirmación
}
