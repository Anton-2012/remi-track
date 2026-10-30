# remi-track: Documento de requisitos (MVP)

**Estado:** Borrador para revisión
**Versión:** 0.2
**Nombre de trabajo.** El nombre comercial se define antes de publicar.

---

## 1. Propósito

remi-track permite registrar las series de entrenamiento de hipertrofia y fuerza en el gimnasio y convierte esos registros en progreso visible: gráficas, totales semanales y mensuales por ejercicio, alertas básicas y un resumen generado con IA.

La app es una herramienta de **seguimiento de datos**. No ofrece consejería médica, nutricional ni de entrenamiento personalizado.

## 2. Usuario

- Personas que entrenan en gimnasio con pesas libres o máquinas, de cualquier nivel.
- Usan el teléfono durante el entrenamiento, con una mano y con las manos húmedas.
- Necesitan registrar en segundos, sin escribir mucho.

## 3. Alcance del MVP

Incluye:

- Registro de sesiones y series con peso, repeticiones, RIR y técnica
- Sensación de la sesión al terminar
- Catálogo local de ejercicios con grupo muscular
- Progreso por ejercicio: peso máximo y volumen, por semana y por mes
- Gráficas de progreso
- Alertas básicas: sobrecarga y descanso insuficiente
- Resumen del último mes generado con Gemini, usando solo totales agregados
- Funcionamiento sin conexión: todos los datos se guardan en el teléfono

## 4. Fuera del MVP

- Inicio de sesión con Gmail o cualquier otra cuenta
- Sincronización entre dispositivos
- Respaldo en la nube
- Registro de sueño
- Fatiga como escala diaria
- Alertas de lesión o de atraso
- Resúmenes de 3, 6, 9, 12 meses y 2 años
- Comunidad, compartir, monetización

## 5. Requisitos funcionales

| ID | Requisito | Prioridad |
|---|---|---|
| RF-01 | La app debe permitir crear una sesión con fecha y hora de inicio. | Alta |
| RF-02 | La app debe permitir agregar ejercicios a una sesión desde un catálogo local. | Alta |
| RF-03 | La app debe permitir registrar cada serie con: peso en kg, repeticiones, RIR (Fallo, RIR1, RIR2 o RIR3) y técnica (Perfecta, Mejorable o Mala). | Alta |
| RF-04 | La app debe permitir registrar una sensación de 1 a 10 al finalizar la sesión. | Alta |
| RF-05 | La app debe permitir editar y eliminar series y sesiones registradas por el usuario. | Alta |
| RF-06 | La app debe avisar, sin bloquear, cuando un valor esté fuera de rango (por ejemplo, peso mayor a 300 kg o más de 50 repeticiones). | Media |
| RF-07 | La app debe mostrar una alerta de sobrecarga cuando un mismo grupo muscular se entrena en dos días consecutivos. | Alta