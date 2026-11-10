# remi-track: Documento de requisitos

**Estado:** Borrador para revisión
**Versión:** 0.5 (beta sin IA)
**Nombre de trabajo.** El nombre comercial se define antes de publicar.

---

## 1. Propósito

remi-track permite registrar las series de entrenamiento de hipertrofia y fuerza en el gimnasio y convierte esos registros en progreso visible: gráficas, totales semanales y mensuales por ejercicio y alertas básicas.

La app es una herramienta de **seguimiento de datos**. No ofrece consejería médica, nutricional ni de entrenamiento personalizado.

## 2. Principio de diseño

> **remi-track registra lo que pasó, no lo que debía pasar.**

Por eso la app no impone rutinas, no calcula cumplimiento y no prescribe series. Describe lo que el usuario hizo, con sus propios datos y su propio ritmo.

## 3. Usuario

- Personas que entrenan en gimnasio con pesas libres o máquinas, de cualquier nivel.
- Usan el teléfono durante el entrenamiento, con una mano y con las manos húmedas.
- No siguen una rutina estricta. Necesitan registrar en segundos, sin escribir mucho.

## 4. Alcance de la beta (MVP)

Incluye:

- Sesiones: empezar, registrar series, terminar, crear sesiones pasadas y copiar la sesión anterior
- Series con peso, repeticiones, RIR, técnica y sensación al terminar la sesión
- Catálogo base de ejercicios y creación de ejercicios propios
- Progreso por ejercicio: peso máximo y volumen, por semana y por mes
- Gráficas de progreso
- Alertas básicas: sobrecarga y descanso insuficiente
- Funcionamiento sin conexión: todos los datos se guardan en el teléfono

La beta no envía datos fuera del teléfono.

## 5. Fuera de la beta

- Resúmenes con IA (Gemini), que pasan a la versión 1.1
- Inicio de sesión con Gmail o cualquier otra cuenta
- Sincronización entre dispositivos y respaldo en la nube
- Rutinas como plantillas, metas o cumplimiento
- Registro de sueño
- Fatiga como escala diaria
- Alertas de lesión o de atraso
- Exportación de datos
- Comunidad, compartir y monetización

## 6. Pantallas de la beta

| Pantalla | Función principal |
|---|---|
| Inicio | Sesión actual o botón para empezar. Aviso de sesiones cerradas sin sensación. |
| Sesión actual | Registrar series, copiar la sesión anterior y terminar la sesión. |
| Historial | Lista de sesiones por fecha. Permite abrir, editar y crear sesiones pasadas. |
| Ejercicios | Catálogo base, búsqueda y creación de ejercicios propios. |
| Progreso y gráficas | Progreso por ejercicio, gráficas y filtros por ejercicio y grupo muscular. |
| Ajustes | Borrar todos los datos y disclaimers. Se habilitará consentimiento de IA en la versión 1.1. |
| Primer uso | Aviso de datos solo en el teléfono y disclaimer. Se acepta antes de registrar. |

## 7. Requisitos funcionales de la beta

| ID | Requisito | Prioridad |
|---|---|---|
| RF-01 | La app debe permitir empezar una sesión de forma explícita, con fecha y hora de inicio. | Alta |
| RF-02 | Si no hay sesión actual y el usuario registra una serie, la app debe crear la sesión automáticamente con la hora de esa serie. | Alta |
| RF-03 | La app debe permitir terminar la sesión actual, con sensación de 1 a 10 opcional y nombre editable. El nombre por defecto es la fecha. | Alta |
| RF-04 | La app debe cerrar la sesión actual automáticamente 2 horas después de la última serie. La hora de fin es la de la última serie. La sensación queda vacía y la app debe avisar al usuario para que la complete. | Alta |
| RF-05 | La app debe permitir crear sesiones pasadas, con fecha y hora de inicio y fin editables, y agregar series a ellas. | Alta |
| RF-06 | La app debe permitir copiar los ejercicios y series de la última sesión terminada a la sesión actual, como punto de partida que el usuario puede ajustar. | Media |
| RF-07 | La app debe permitir editar y eliminar series, sesiones terminadas y nombres de sesión. | Alta |
| RF-08 | La app debe incluir un catálogo base de ejercicios y permitir crear ejercicios propios. Todo ejercicio debe tener grupo muscular. | Alta |
| RF-09 | Cada serie debe registrar peso en kg, repeticiones, RIR (Fallo, RIR1, RIR2 o RIR3) y técnica (Perfecta, Mejorable o Mala). | Alta |
| RF-10 | La app debe avisar, sin bloquear, cuando un valor esté fuera de rango (por ejemplo, peso mayor a 300 kg o más de 50 repeticiones). | Media |
| RF-11 | La app debe mostrar una alerta de sobrecarga cuando un mismo grupo muscular se entrena en dos días consecutivos. | Alta |
| RF-12 | La app debe mostrar una alerta de descanso cuando un mismo ejercicio se registra con menos de 48 horas desde la sesión anterior. | Alta |
| RF-13 | La app debe calcular, por ejercicio, el peso máximo y el volumen (series × repeticiones × peso) por semana y por mes. | Alta |
| RF-14 | La app debe mostrar gráficas de peso máximo por ejercicio en el tiempo, y de volumen semanal y mensual. | Alta |
| RF-15 | La app debe permitir filtrar el progreso por ejercicio y por grupo muscular. | Media |
| RF-16 | La app debe permitir borrar todos los datos desde Ajustes, con confirmación. | Alta |
| RF-17 | Al primer uso, la app debe mostrar el aviso de que los datos viven solo en el teléfono y el disclaimer. El usuario debe aceptarlo antes de registrar. | Alta |
| RF-18 | Toda alerta debe mostrar el aviso: "Solo seguimiento de datos. No es consejería médica ni nutricional." | Alta |
| RF-18 | Cada campo de peso tiene un selector kg/lb. El valor se convierte a kilogramos antes de guardarse. La unidad de visualización se puede cambiar en cualquier pantalla sin modificar los datos | Alta |

## 8. Planeado para la versión 1.1

| ID | Requisito |
|---|---|
| RF-V1-01 | Resúmenes con Gemini bajo demanda: mensual, trimestral, semestral y anual, con una cuota por tipo al mes. |
| RF-V1-02 | Los resúmenes trimestral, semestral y anual solo se habilitan cuando existen datos del período completo. |
| RF-V1-03 | Solo se envían totales mensuales agregados por ejercicio, nunca series crudas. |
| RF-V1-04 | Consentimiento para IA en Ajustes, desactivado por defecto y revocable en cualquier momento. |
| RF-V1-05 | Un resumen guardado para un período sin cambios no consume cuota. |
| RF-V1-06 | Las llamadas a Gemini pasan por un proxy. La API key no vive dentro de la app. |

## 9. Requisitos no funcionales

- **Sin conexión.** Todas las funciones de la beta deben funcionar sin internet.
- **Privacidad.** En la beta, ningún dato sale del teléfono.
- **Registro rápido.** Registrar una serie debe tomar menos de 15 segundos con toques y valores por defecto.
- **Uso en el gimnasio.** Números grandes, botones de al menos 48 dp y contraste alto para usar con luz intensa o con sudor en las manos.
- **Plataformas.** iOS y Android, con React Native y Expo.
- **Distribución de la beta.** APK para Android. iOS mediante TestFlight, cuando se tenga cuenta de desarrollador.
- **Idioma.** Español en la beta.

## 10. Restricciones y supuestos

- **Los datos son autorreportados.** Peso, repeticiones, RIR, técnica y sensación dependen de lo que registra el usuario. La app no verifica ningún dato.
- **Las alertas describen registros, no hechos fisiológicos.** Por ejemplo, la app dice "registraste dos sesiones de pecho en 36 horas", no "tu músculo no se recuperó".
- **El RIR y la técnica son estimaciones subjetivas.** Dos personas pueden registrar lo mismo con criterios distintos.
- **Los datos viven solo en el teléfono.** Si el usuario desinstala la app o cambia de teléfono, pierde su historial. Esto se muestra en el primer uso.
- **Cierre automático.** La regla de 2 horas es un valor inicial. Se ajusta con datos reales de uso de la beta.
- **Edad.** La beta no pide edad. Si se agrega el cálculo de TMB, se revisa este requisito.
- **Retroalimentación de la beta.** Como no hay telemetría, la retroalimentación llega por formulario o chat con los testers.

## 11. Glosario

- **Serie:** conjunto de repeticiones con un peso, sin descanso entre ellas.
- **Repetición:** un movimiento completo del ejercicio.
- **Volumen:** series × repeticiones × peso, en kg.
- **RIR (Reps In Reserve):** repeticiones que el usuario estima que podía hacer antes de llegar al fallo. Fallo = 0, RIR1 = 1, RIR2 = 2, RIR3 = 3 o más.
- **Sesión actual:** la sesión sin hora de fin. Solo puede haber una a la vez.
- **Sobrecarga:** en este documento, entrenar el mismo grupo muscular en días consecutivos. Es un término de registro, no un diagnóstico.

## 12. Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 0.1 | 8 oct 2026 | Versión inicial con login, sincronización y alcance amplio. |
| 0.2 | 30 oct 2026 | Alcance MVP reducido. Sin login ni sincronización. Se agregan RIR, técnica, sensación y restricciones de datos autorreportados. |
| 0.3 | 2 nov 2026 | Principio de diseño, lógica de sesiones, ejercicios propios, pantallas, consentimiento para Gemini, ajustes y primer uso. |
| 0.4 | 2 nov 2026 | Beta sin IA. Resúmenes con Gemini, proxy y consentimiento pasan a la versión 1.1. La beta no envía datos fuera del teléfono. |
| 0.5 | 10 nov 2026 | Beta sin IA / selector kg/lb. Selector kg/lb en beta en beta. Peso almacenado en kg (ADR-006) |